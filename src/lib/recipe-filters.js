const searchInput = document.getElementById('search')
const categorySelect = document.getElementById('category')
const ingredientSelect = document.getElementById('ingredient')
const clearBtn = document.getElementById('clear-filters')
const resultCount = document.getElementById('result-count')
const noResults = document.getElementById('no-results')
const cards = document.querySelectorAll('.recipe-card')
const totalCount = cards.length

function applyFilters() {
  const search = searchInput.value.toLowerCase().trim()
  const category = categorySelect.value
  const ingredient = ingredientSelect.value.toLowerCase()
  let visible = 0

  cards.forEach(function (card) {
    const title = card.dataset.title || ''
    const tags = JSON.parse(card.dataset.tags || '[]')
    const ingredients = JSON.parse(card.dataset.ingredients || '[]')

    const matchSearch = !search || title.includes(search)
    const matchCategory = !category || tags.includes(category)
    const matchIngredient =
      !ingredient ||
      ingredients.some(function (i) {
        return i.toLowerCase() === ingredient
      })

    const show = matchSearch && matchCategory && matchIngredient
    card.style.display = show ? '' : 'none'
    if (show) visible++
  })

  const hasFilters = search || category || ingredient
  resultCount.textContent = hasFilters
    ? 'Showing ' + visible + ' of ' + totalCount + ' recipes'
    : totalCount + ' recipes'
  noResults.classList.toggle('hidden', visible > 0)
}

searchInput.addEventListener('input', applyFilters)
categorySelect.addEventListener('change', applyFilters)
ingredientSelect.addEventListener('change', applyFilters)
clearBtn.addEventListener('click', function () {
  searchInput.value = ''
  categorySelect.value = ''
  ingredientSelect.value = ''
  applyFilters()
})

// Handle pre-selected category from URL params
const params = new URLSearchParams(window.location.search)
const cat = params.get('category')
if (cat) {
  categorySelect.value = cat
}

applyFilters()
