import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()
  return (
    <>
      <div>
        <h4>
          <a href={'https://github.com/jairocket/projetoIntegrador-Wined/tree/react'} target={'_blank'}>
            Wined+
          </a>
        </h4>
        <p>{t("projects.description.wined")}</p>
      </div>
      <div>
        <h4>
          <a href={'https://github.com/jairocket/marvel-app'} target={'_blank'}>
            Marvellous Wiki
          </a>
        </h4>
        <p>{t("projects.description.marvellous")}</p>
      </div>
      <div>
        <h4>
          <a href={'https://github.com/jairocket/budget'} target={'_blank'}>
            Budget
          </a>
        </h4>
        <p>{t("projects.description.budget")}</p>
      </div>
      <div>
        <h4>
          <a href={'https://github.com/jairocket/runner'} target={'_blank'}>
            Runner
          </a>
        </h4>
        <p>{t("projects.description.runner")}</p>
      </div>
    </>
  )
}
