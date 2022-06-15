import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

// @ts-ignore
import { SiteThemeProps } from '../theme'

export interface Recipe {
  id: string
  date: string
  title: string
  url: string
  description?: string
  photo: {
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const Description = styled.div<SiteThemeProps>`
  padding: ${({ theme }) => theme.spacings[3]};
`

const StyledImage = styled(GatsbyImage)`
  flex-shrink: 0;
`

const StyledArticle = styled.article<SiteThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: middle;
  margin: ${({ theme }) => theme.spacings[5]};
  border: var(--black) 3px solid;

  @media (min-width: ${({ theme }) => theme.mdBreakpoint}) {
    flex-direction: row;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25), 0 5px 8px rgba(0, 0, 0, 0.06);
  }
`

export const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <Link to={recipe.url} title={recipe.title}>
      <StyledArticle>
        <StyledImage image={recipe.photo.asset.gatsbyImageData} alt="" />
        <Description>
          <h2>
            {recipe.title} <br />
            <small>{recipe.date}</small>
          </h2>
          <p>TODO</p>
        </Description>
      </StyledArticle>
    </Link>
  )
}
