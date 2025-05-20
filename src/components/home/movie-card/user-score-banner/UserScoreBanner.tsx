import "./UserScoreBanner.scss";
interface IProps {
  userScore: number;
}

enum EPrimaryColors {
  Green = "#20C976",
  Yellow = "#D2D531",
  Red = "#DB2360",
}

enum ESecondaryColors {
  Green = "#204529",
  Yellow = "#423D0F",
  Red = "#451431",
}

const getGaugePrimaryColor = (score: number): string => {
  if (score >= 75) return EPrimaryColors.Green;
  if (score >= 50) return EPrimaryColors.Yellow;
  return EPrimaryColors.Red;
};

const getGaugeSecondaryColor = (score: number): string => {
  if (score >= 75) return ESecondaryColors.Green;
  if (score >= 50) return ESecondaryColors.Yellow;
  return ESecondaryColors.Red;
};

const UserScoreBanner = ({ userScore }: IProps) => {
  const primaryColor = getGaugePrimaryColor(userScore);
  const secondaryColor = getGaugeSecondaryColor(userScore);

  const gaugeStyle = {
    background: `conic-gradient(${primaryColor} 0% ${userScore}%, ${secondaryColor} ${userScore}% 100%)`,
  };

  return (
    <div className="usb-container">
      <div className="usb-gauge" style={gaugeStyle} />
      <div className="usb-data">
        <div className="usb-value">{userScore}</div>
        <div className="usb-percent-sign">%</div>
      </div>
    </div>
  );
};

export default UserScoreBanner;
