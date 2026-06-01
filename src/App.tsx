import './i18n'

import { useTranslation } from 'react-i18next'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './styles/globals'
import { Avatar } from './components/Avatar'
import { Header } from './components/Header'
import coolAvatar from '../src/assets/cool-avatar.svg'
import {
  AppContainer,
  Heading,
  Heading2,
  HeadingAndData,
  IdContainer,
} from './styles/styles'

import { Projects } from './components/Projects'
import { ProjectsContainer } from './components/Projects/styles'
import { ArticlesContainer } from './components/Article/styles'
import { Articles } from './components/Articles'
import { SocialMediaLinks } from './components/SocialMediaLinks'
import { Skills } from './components/Skills'

import { Footer } from './components/Footer'


function App() {
  const {t} = useTranslation()

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AppContainer className="App">
        <IdContainer>
          <Avatar size={'large'} src={coolAvatar} />
          <HeadingAndData>
            <Heading>
              {t("heading.title")} <span>{t('heading.name')}</span>
            </Heading>
            <h3>{t("heading.occupation")}</h3>
            <Skills />
            <SocialMediaLinks />
          </HeadingAndData>
        </IdContainer>
        <ProjectsContainer>
          <Heading2 id="projects">{t("section.projects")}</Heading2>
          <Projects />
        </ProjectsContainer>
        <ArticlesContainer>
          <Heading2 id="articles">{t("section.articles")}</Heading2>
          <Articles />
        </ArticlesContainer>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
