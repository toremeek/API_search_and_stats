import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(25, 20, 23, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const StyledInnerDiv = styled.div`
  cursor: pointer;
  text-align: left;
  background-color: rgb(255, 255, 255);
  color: black;
  width: 70%;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  padding: 40px;
  button {
    width: 20%;
    margin-left: 40%;
    height: 100%;
    border: solid white 23x;
    background: black;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const StyledSection = styled.section`
  margin: 0 0 5rem 0;
  width: 90%;
`;

const Stats = ({ favoritt, showStatistics }) => {
  const [chartData, setChartData] = useState({});
  const [chartDataTwo, setChartDataTwo] = useState({});
  const [chartDataThree, setChartDataThree] = useState({});

  console.log("data", favoritt);
  const spesValues = () => {
    const titles = [];
    const metaScore = [];
    const imdb = [];
    const votes = [];

    for (const dataObj of favoritt) {
      titles.push(dataObj.Title);
      metaScore.push(dataObj.Metascore);
      imdb.push(dataObj.imdbRating);
      votes.push(dataObj.imdbVotes);
    }

    setChartData({
      labels: titles,
      datasets: [
        {
          label: "Metascore",
          data: metaScore,
          backgroundColor: ["rgba(255, 159, 64, .2)"],
          borderColor: ["rgba(255, 159, 64, 1)"],
          borderWidth: 1
        }
      ]
    });

    setChartDataTwo({
      labels: titles,
      datasets: [
        {
          label: "IMDB-rating",
          data: imdb,
          backgroundColor: ["rgba(0, 0, 255, 0.5)"],
          borderColor: ["rgba(255, 159, 64, 1)"],
          borderWidth: 2
        }
      ]
    });
    setChartDataThree({
      labels: titles,
      datasets: [
        {
          label: "IMDB Votes",
          data: votes,
          backgroundColor: ["rgba(255, 159, 64, .2)"],
          borderColor: ["rgba(255, 159, 64, 1)"],
          borderWidth: 1
        }
      ]
    });
  };

  useEffect(() => {
    spesValues();
  }, [favoritt]);

  return (
    <StyledDiv onClick={showStatistics}>
      <StyledInnerDiv>
        <StyledSection>
          <p>Meta-score for dine favoritter:</p>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              title: {
                text: "År",
                display: true,
                color: "rgba(255, 255, 0, 1"
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: true
                    }
                  }
                ]
              }
            }}
          />
        </StyledSection>
        <StyledSection>
          <p>IMDB-rating for dine favoritter:</p>
          <Line
            data={chartDataTwo}
            options={{
              responsive: true,
              title: {
                text: "År",
                display: true,
                color: "rgba(255, 255, 0, 1"
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: true
                    }
                  }
                ]
              }
            }}
          />
        </StyledSection>

        <button type="button" onClick={showStatistics}>
          Lukk statistikk
        </button>
      </StyledInnerDiv>
    </StyledDiv>
  );
};

export default Stats;
