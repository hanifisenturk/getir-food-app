import ContainerHeader from "../../../UI/ContainerHeader";
import RestoranCard from "./RestoranCard";
import classes from "./RestoranContainer.module.css";

const RestoranContainer = () => {
  return (
    <article className={classes["restoran-container"]}>
      <ContainerHeader>
        <p>
          <span>101 </span> <span>Restoran</span> Listeleniyor
        </p>
        <div className={classes["restoran-container--radios"]}>
          <figure>
            <svg
              data-testid="icon"
              color="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="style__Icon-sc-__sc-hqksj3-1 gNTxdK"
            >
              <path
                d="M4 4c0 1.2-.8 2-2 2s-2-.8-2-2 .8-2 2-2 2 .8 2 2zm-2 6c-1.2 0-2 .8-2 2s.8 2 2 2 2-.8 2-2-.8-2-2-2zm0 8c-1.2 0-2 .8-2 2s.8 2 2 2 2-.8 2-2-.8-2-2-2zm0 8c-1.2 0-2 .8-2 2s.8 2 2 2 2-.8 2-2-.8-2-2-2zM8 6h22c1.2 0 2-.8 2-2s-.8-2-2-2H8c-1.2 0-2 .8-2 2s.8 2 2 2zm22 4H8c-1.2 0-2 .8-2 2s.8 2 2 2h22c1.2 0 2-.8 2-2s-.8-2-2-2zm0 8H8c-1.2 0-2 .8-2 2s.8 2 2 2h22c1.2 0 2-.8 2-2s-.8-2-2-2zm0 8H8c-1.2 0-2 .8-2 2s.8 2 2 2h22c1.2 0 2-.8 2-2s-.8-2-2-2z"
                class="style__Path-sc-__sc-hqksj3-2 kqvXtw"
              />
            </svg>
          </figure>
          <figure>
            <svg
              data-testid="icon"
              color="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="style__Icon-sc-__sc-hqksj3-1 gNTxdK"
            >
              <path
                d="M13.714 4.572v4.571a4.585 4.585 0 0 1-4.571 4.571H4.572A4.585 4.585 0 0 1 .001 9.143V4.572A4.585 4.585 0 0 1 4.572.001h4.571a4.585 4.585 0 0 1 4.571 4.571zM9.143 18.286H4.572a4.585 4.585 0 0 0-4.571 4.571v4.571a4.585 4.585 0 0 0 4.571 4.571h4.571a4.585 4.585 0 0 0 4.571-4.571v-4.571a4.585 4.585 0 0 0-4.571-4.571zM27.429 0h-4.571a4.585 4.585 0 0 0-4.571 4.571v4.571a4.585 4.585 0 0 0 4.571 4.571h4.571A4.585 4.585 0 0 0 32 9.142V4.571A4.585 4.585 0 0 0 27.429 0zm0 18.286h-4.571a4.585 4.585 0 0 0-4.571 4.571v4.571a4.585 4.585 0 0 0 4.571 4.571h4.571A4.585 4.585 0 0 0 32 27.428v-4.571a4.585 4.585 0 0 0-4.571-4.571z"
                class="style__Path-sc-__sc-hqksj3-2 kqvXtw"
              />
            </svg>
          </figure>
          <figure>
            <svg
              data-testid="icon"
              color="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              class="style__Icon-sc-__sc-hqksj3-1 gNTxdK"
            >
              <path
                d="M0 2.286C0 .915.914 0 2.286 0h27.429c1.371 0 2.286.914 2.286 2.286s-.914 2.286-2.286 2.286H2.286C.915 4.572 0 3.658 0 2.286zm29.714 25.143H2.285c-1.371 0-2.286.914-2.286 2.286s.914 2.286 2.286 2.286h27.429c1.371 0 2.286-.914 2.286-2.286s-.914-2.286-2.286-2.286zm0-18.286H2.285c-1.371 0-2.286.914-2.286 2.286s.914 2.286 2.286 2.286h27.429c1.371 0 2.286-.914 2.286-2.286s-.914-2.286-2.286-2.286zm0 9.143H2.285c-1.371 0-2.286.914-2.286 2.286s.914 2.286 2.286 2.286h27.429c1.371 0 2.286-.914 2.286-2.286s-.914-2.286-2.286-2.286z"
                class="style__Path-sc-__sc-hqksj3-2 kqvXtw"
              />
            </svg>
          </figure>
        </div>
      </ContainerHeader>
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
      <RestoranCard />
    </article>
  );
};

export default RestoranContainer;
