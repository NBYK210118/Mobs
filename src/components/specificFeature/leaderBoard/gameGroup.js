import { useState } from 'react';
import GameItem from './gameItem';

const GameGroup = () => {
  const [selected, setSelected] = useState('BattleGround');

  return (
    <div className="flex flex-col">
      <GameItem
        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ku7ynjD6DIcRDtkYeBOxnFABgi_AcmWAYA&s'}
        gameName="BattleGround"
        selected={selected}
        setSelected={setSelected}
      />
      <GameItem
        img={'https://i.pinimg.com/564x/d1/b1/1d/d1b11d5e4dbae547ac0d651476cec488.jpg'}
        gameName="League of Legend"
        selected={selected}
        setSelected={setSelected}
      />
      <GameItem
        img={'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png'}
        gameName="VALORANT"
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
export default GameGroup;
