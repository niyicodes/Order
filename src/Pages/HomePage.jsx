import React, { useEffect, useState } from "react";
import Category from "../Components/CategoryCard";
import ResturantCard from "../Components/RestaurantCard";
import { Button, Skeleton, Stack, Typography, styled } from "@mui/material";
import Discount from "../Components/DiscountCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeroImage from "../assets/heroPic.png";
import Friends from "../assets/friends.png";
import AppStore from "../assets/app-store-badges-en 1.png";
import JoinUs from "../Components/JoinUs";

const HomePage = () => {
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, 3000);
  }, []);

  const CustomNavLink = styled(Button)`
    margin: 0 2px;
    text-decoration: none;
    color: black;

    &.active {
      border: 2px solid #fc8a06;
      color: #fc8a06;
      padding: 5px 15px;
      border-radius: 20px;
    }

    &:hover {
      background-color: #fc8a06;
      padding: 5px 15px;
      border-radius: 20px;
      color: white;
    }
  `;

  const stats = [
    {
      name: "Registered Riders",
      value: 546,
    },
    {
      name: "Orders Delivered",
      value: 789900,
    },
    {
      name: "Registered Riders",
      value: 690,
    },
    {
      name: "Registered Riders",
      value: 17457,
    },
  ];
  return (
    <main className="relative">
      <section className="flex p-[5%] mt-[20px] mb-[30px] rounded-[15px] mx-[2%] bg-[#03081F] min-h-[32vh] text-white">
        <div className="flex flex-col gap-3 xl:gap-[20px] w-full md:w-[50%]">
          <article className="flex flex-col gap-2 text-center md:text-left">
            <small className="text-[13px] xl:text-[20px]">
              Order Restaurant food, takeaway and groceries.
            </small>
            <div>
              <h1 className="text-[25px] xl:text-[40px] font-bold">
                Feast Your Senses,
              </h1>
              <h1 className="text-[25px] xl:text-[40px] font-bold text-[#FC8A06]">
                Fast and Fresh
              </h1>
            </div>
          </article>
          <article className="flex flex-col gap-2 xl:gap-[15px] w-full md:w-[80%] mx-auto md:mx-0 ">
            <small className="text-center md:text-left">
              Enter a postcode to see what we deliver
            </small>
            <div className="relative bg-white rounded-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g. EC4R 3TE"
                className="bg-transparent p-2 xl:p-6 outline-none"
              />
              <button className="p-2 xl:p-6 h-auto rounded-full bg-[#FC8A06] text-white absolute right-0">
                <p className="search-icon">
                  <ArrowForwardIosIcon />
                </p>
                <p className="hidden md:block ">Search</p>
              </button>
            </div>
          </article>
        </div>
        <div className="hidden md:block w-[50%]">
          <img src={HeroImage} alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="px-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Typography variant="h4" sx={{ fontWeight: "700", fontSize: "20px" }}>
            Up to -40% 🎊 Order.uk exclusive deals
          </Typography>
          <ul>
            {["food", "snacks", "drinks"].map((x) => {
              return <CustomNavLink key={x}>{x}</CustomNavLink>;
            })}
          </ul>
        </div>
        <div className="flex flex-nowrap relative overflow-x-auto gap-3 pb-4 my-4">
          {isFetching ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
              return (
                <Stack spacing={1} key={x}>
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width={200}
                    height={150}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={200}
                    height={40}
                  />
                </Stack>
              );
            })
          ) : (
            <div className="flex gap-4">
              {[1, 2, 3].map((item) => (
                <Discount key={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-[15px] px-3">
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", fontSize: "20px", paddingBottom: "10px" }}
        >
          Order.uk Popular Categories 🤩
        </Typography>
        <div className="flex gap-3 my-4 overflow-x-auto">
          {isFetching
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
                return (
                  <Stack spacing={1} key={x}>
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={200}
                      height={150}
                    />
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={200}
                      height={40}
                    />
                  </Stack>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
                return <Category key={x} />;
              })}
        </div>
      </section>

      <section className="py-[15px] px-3">
        <Typography
          variant="h4"
          sx={{ fontWeight: "700", fontSize: "20px", paddingBottom: "10px" }}
        >
          Popular Restaurants
        </Typography>
        <div className="flex gap-3 my-4 overflow-x-auto">
          {isFetching
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
                return (
                  <Stack spacing={1} key={x}>
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      width={200}
                      height={150}
                    />
                    <Skeleton
                      variant="rectangular"
                      animation="wave"
                      width={200}
                      height={40}
                    />
                  </Stack>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
                return <ResturantCard key={x} />;
              })}
        </div>
      </section>

      <section className="bg-[#E0E1DC] p-[5%] flex flex-col-reverse md:flex-row w-full">
        <div className="w-full md:w-[50%]">
          <img src={Friends} alt="" className="w-full h-full object-fill" />
        </div>
        <div className="w-full md:w-[70%] flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-[35px] md:text-[45px] text-[#03081F] font-bold">
              Ordering is more
            </h1>
            <div className="md:bg-[#03081F] rounded-full md:text-white py-2">
              <p className="text-[25px] md:text-[30px] font-semibold">
                <span className="text-[#FC8A06] underline">Personalised</span> &
                Instant
              </p>
            </div>
            <p>Download the Order.uk app for faster ordering</p>
          </div>
          <figure>
            <img src={AppStore} alt="" />
          </figure>
        </div>
      </section>

      <section className="px-3">
        <div className="flex flex-nowrap relative overflow-x-auto gap-3 pb-4 my-4">
          {isFetching ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
              return (
                <Stack spacing={1} key={x}>
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width={200}
                    height={150}
                  />
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={200}
                    height={40}
                  />
                </Stack>
              );
            })
          ) : (
            <div className="flex gap-4">
              {[1, 2, 3].map((item) => (
                <JoinUs key={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-[40px] my-4 bg-[#FC8A06] flex flex-col md:flex-row gap-4 justify-between p-4 rounded-lg text-[20px] md:text-[35px] text-center text-white font-semibold">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center flex-1 pb-6 md:pb-0"
          >
            <h1>{stat.value}+</h1>
            <p className="text-sm">{stat.name}</p>
            {/* Divider line */}
            {index < stats.length - 1 && (
              <div className="absolute md:hidden bottom-0 left-0 w-full h-[1px] bg-white" />
            )}
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute top-0 right-0 h-full w-[1px] bg-white" />
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
