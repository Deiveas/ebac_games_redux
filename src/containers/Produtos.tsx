import { useEffect, useState } from 'react'
import Produto from '../components/Produto'
import { useGetJogosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: jogos, isLoading } = useGetJogosQuery()
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(isLoading)
    }, 1000)

    return () => clearTimeout(timer)
  }, [isLoading])

  if (showLoading) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
