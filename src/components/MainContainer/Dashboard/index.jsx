import styled from "styled-components";
import StatCard from "./StatCard";
import { FaTasks, FaProjectDiagram, FaDollarSign } from "react-icons/fa";
import Activity from "./Activity";
import SearchField from "./SearchField";
import TodayTask from "./TodayTask";
import Proposals from "./Proposals";
import CalendarComponent from "./CalendarComponent";

const DashboardContainer = styled.div`
  padding-top: 0.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
`;

const SearchContainer = styled.div`
  width: 45%;
  padding-left: 5rem;
`;

const MainContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const WelcomeCard = styled.div`
  flex: 1;
  padding: 0.5rem 2.5rem;
  margin-right: 4rem;
  background-color: rgba(16, 137, 143, 1);
  border-radius: 0.5rem;
  color: white;
  width: 56.4%;
`;

const StatusText = styled.div`
  font-size: 0.75rem;
  color: #ffffff;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0.25rem;
  margin-top: 0.5rem;
  background-color: rgba(87, 187, 192, 1);
  border-radius: 0.25rem;
`;

const Progress = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 0.25rem;
  width: 80%;
`;

const CalendarWrapper = styled.div`
  width: 31.33%;
  margin-left: 2.5rem;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LeftSection = styled.div`
  width: 66.67%;
`;

const StatCardsWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding-right: 3rem;
`;

const RightSection = styled.div`
  width: 50%;
  padding: 1rem 1rem 0rem 1rem;
  background-color: white;
  height:100vh;
  margin-bottom: -50px
  border-radius: 0.9rem;
  margin-left: 1.25rem;
`;

const TaskImage = styled.img`
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
`;

const TaskTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 600;
`;

const TaskDescription = styled.p`
  font-size: 0.675rem;
  color: #718096;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header>
        <div style={{ width: "66.67%" }}>
          <Title>Dashboard</Title>
        </div>

        <SearchContainer>
          <SearchField />
        </SearchContainer>
      </Header>

      <MainContent>
        <WelcomeCard>
          <h1 className="text-lg font-bold">Hello, Jack</h1>
          <div className="flex justify-between ">
            <div>
              <StatusText>7 new projects are waiting for you</StatusText>
            </div>
            <div>
              <StatusText>Status</StatusText>
            </div>
          </div>
          <ProgressBarContainer>
            <ProgressBar>
              <Progress />
            </ProgressBar>
            <div className="flex justify-between mt-0">
              <StatusText>120/127</StatusText>
            </div>
          </ProgressBarContainer>
        </WelcomeCard>

        <CalendarWrapper>
          <CalendarComponent />
        </CalendarWrapper>
      </MainContent>

      <StatsSection>
        <LeftSection>
          <StatCardsWrapper>
            <StatCard
              title="Today's Tasks"
              value={15}
              percentage={70}
              icon={<FaTasks />}
              color="rgba(16, 137, 143, 1)"
            />
            <StatCard
              title="Total Projects"
              value={127}
              percentage={80}
              icon={<FaProjectDiagram />}
              color="rgba(199, 44, 136, 1)"
            />
            <StatCard
              title="Total Earnings"
              value="$12000"
              percentage={60}
              icon={<FaDollarSign />}
              color="rgba(16, 137, 143, 1)"
            />
          </StatCardsWrapper>
          <div style={{ minHeight: "100vh", paddingTop: "0.75rem" }}>
            <Activity />
            <Proposals />
          </div>
        </LeftSection>

        <RightSection className="rounded-lg">
          <h3
            style={{
              marginBottom: "0.4rem",
              fontSize: ".85rem",
              fontWeight: 600,
            }}
          >
            Task Today
          </h3>
          <TaskImage
            src="https://s3-alpha-sig.figma.com/img/c646/cd8c/9e05cf0339e081b33cfa12c1b8e20492?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QW1uEJSIN77sAdYuFXV3j4mEQLIVKfEtDXKo3ozBnYP8zXEIfAxtn0kdVT37-womohDpma6SPdiW346mwMqmnXSUNw58fZ03ymde8eVDgEmSsi3kBWZtaY7BqeIrc2OsNkz-YmPEIolf-grET3eVL~XiERh6~GI6Bn9yfLK7SBOiJdujEbTIRpXnAd~yLBYjP-EolYgaQvYs0EApQNluNkhPXPQcsD2nQY~vdu7HyKZTP7GtUU9kV8ynOUziCgW1loAcemcqHtIxPam11jIOheNETARVpEC99pd8BLmHAyWCoEKd1ptYvpZ3gbnmYPMd-lsCkB3TIJ7c8I~U-eixDw__"
            alt="Task"
          />
          <TaskTitle>IMPLEMENT Remote Work Policy</TaskTitle>
          <TaskDescription>Workforce Planning Analyst</TaskDescription>

          <TodayTask />
        </RightSection>
      </StatsSection>
    </DashboardContainer>
  );
};

export default Dashboard;
