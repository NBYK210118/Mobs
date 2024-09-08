import VerificationItem from './profile/VerificationItem';

const VerificationStatus = () => {
  return (
    <div className="flex flex-col gap-4">
      <VerificationItem
        logoImg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ku7ynjD6DIcRDtkYeBOxnFABgi_AcmWAYA&s'}
        gameName="BattleGround"
        userName="UserName"
        verificationDate="2024-06-26 15:48"
      />
      <VerificationItem
        logoImg={'https://i.pinimg.com/564x/d1/b1/1d/d1b11d5e4dbae547ac0d651476cec488.jpg'}
        gameName="League of Legend"
        verificationDate="2024-06-23 12:01"
      />
      <VerificationItem
        logoImg={'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png'}
        gameName="VALORANT"
        userName="UserName"
        verificationDate="2024-06-23 12:01"
      />
    </div>
  );
};

export default VerificationStatus;
