import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const LevelXPTable = () => {
  const generateLevelXP = () => {
    const levels = 200;
    const baseXP = 100;
    const incrementFactor = 1.04;

    const levelXP = new Array(levels).fill(0);
    levelXP[1] = baseXP; // 2레벨로 가기 위한 경험치는 100
    levelXP[2] = 150; // 3레벨로 가기 위한 경험치는 150

    for (let i = 3; i < levels; i++) {
      levelXP[i] = Math.round(levelXP[i - 1] * incrementFactor);
    }

    return levelXP;
  };

  const levelXP = generateLevelXP();

  return (
    <Scrollbars>
      <div>
        <h2>Experience Points Required for Each Level</h2>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Experience Points</th>
            </tr>
          </thead>
          <tbody className="grid grid-cols-12 gap-5">
            {levelXP.map((xp, index) => (
              <tr key={index}>
                <td className="">{index + 1}</td>
                <td>{xp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Scrollbars>
  );
};

export default LevelXPTable;
