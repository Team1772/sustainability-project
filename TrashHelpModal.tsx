import { BaseModal } from './BaseModal'
import React from 'react'
type BaseModalWrapperProps = {
  isModalVisible: boolean
  onBackDropClick: () => void
}

export const TrashHelpModal: React.FC<BaseModalWrapperProps> = ({
  area,
  isModalVisible,
  onBackDropClick
}) => {
  if (!isModalVisible) return null

  return (
    <BaseModal onBackDropClick={onBackDropClick}>
      <div>
        <h1>
          O objetivo do Teamlist é proporcionar uma gestão e controle de tarefas
          poderá visualizar todo o fluxo de trabalho da área.
        </h1>

        <p>
          As tarefas estão organizadas entre listas: Com o desenvolvimento dos
          membros para a realização de uma tarefa, ela será atribuída a
          diferentes listas. Essa metodologia de trabalho é chamada de Kanban.
        </p>

        <buuton onClick={onBackDropClick}>Entendido</buuton>
      </div>
    </BaseModal>
  )
}
