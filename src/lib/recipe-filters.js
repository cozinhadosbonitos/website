const searchInput = document.getElementById('search')
const courseTypeSelect = document.getElementById('course-type')
const ingredientSelect = document.getElementById('ingredient')
const clearBtn = document.getElementById('clear-filters')
const resultCount = document.getElementById('result-count')
const noResults = document.getElementById('no-results')
const cards = document.querySelectorAll('.recipe-card')
const totalCount = cards.length

function applyFilters() {
  const search = searchInput.value.toLowerCase().trim()
  const courseType = courseTypeSelect.value
  const ingredient = ingredientSelect.value.toLowerCase()
  let visible = 0

  cards.forEach(function (card) {
    const title = card.dataset.title || ''
    const cardCourseType = card.dataset.courseType || ''
    const ingredients = JSON.parse(card.dataset.ingredients || '[]')

    const matchSearch = !search || title.includes(search)
    const matchCourseType = !courseType || cardCourseType === courseType
    const matchIngredient =
      !ingredient ||
      ingredients.some(function (i) {
        return i.toLowerCase() === ingredient
      })

    const show = matchSearch && matchCourseType && matchIngredient
    card.style.display = show ? '' : 'none'
    if (show) visible++
  })

  const hasFilters = search || courseType || ingredient
  resultCount.textContent = hasFilters
    ? 'Showing ' + visible + ' of ' + totalCount + ' recipes'
    : totalCount + ' recipes'
  noResults.classList.toggle('hidden', visible > 0)
}

searchInput.addEventListener('input', applyFilters)
courseTypeSelect.addEventListener('change', applyFilters)
ingredientSelect.addEventListener('change', applyFilters)
clearBtn.addEventListener('click', function () {
  searchInput.value = ''
  courseTypeSelect.value = ''
  ingredientSelect.value = ''
  applyFilters()
})

// Handle pre-selected course type from URL params
const params = new URLSearchParams(window.location.search)
const type = params.get('type')
if (type) {
  courseTypeSelect.value = type
}

applyFilters()
