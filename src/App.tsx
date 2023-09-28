import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter('Carlos');
  const char2 = useCharacter('Mara');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    //console.log(`Apertou a tecla: ${e.code}`);// Ver que tecla apertou
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
      </C.Map>
      <button onClick={()=>char2.moveLeft()}>Esquerda</button>
      <button onClick={()=>char2.moveRight()}>Direita</button>
      <button onClick={()=>char2.moveUp()}>Cima</button>
      <button onClick={()=>char2.moveDown()}>Baixo</button>
    </C.Container>
  );
}

export default App;