// 공통 Medal 컴포넌트
const Medal = ({ color, label }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-full border-4 ${color}`}>
      <div className={`text-4xl font-bold ${color}`}>⬤</div>
      <div className="mt-2 text-xl font-semibold">{label}</div>
    </div>
  );
};

// Diamond 메달 컴포넌트
export const DiamondMedal = () => <Medal color="text-blue-500 border-blue-500" label="Diamond" />;

// Gold 메달 컴포넌트
export const GoldMedal = () => <Medal color="text-yellow-500 border-yellow-500" label="Gold" />;

// Silver 메달 컴포넌트
export const SilverMedal = () => <Medal color="text-gray-400 border-gray-400" label="Silver" />;

// Bronze 메달 컴포넌트
export const BronzeMedal = () => <Medal color="text-yellow-800 border-yellow-800" label="Bronze" />;
