import PropTypes from 'prop-types';
import {
  StatsSection,
  StatsName,
  StatsList,
  StatsData,
  DataName,
  DataValue,
  getRandomHexColor,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsName>{title}</StatsName>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsData
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <DataName>{label}</DataName>
            <DataValue>{percentage}%</DataValue>
          </StatsData>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
