import React, { useEffect, useState } from "react";
import Category from "../Components/CategoryCard";
import ResturantCard from "../Components/Restaurant";
import {
  Button,

  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Discount from "../Components/DiscountCard";

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
  return (
    <main className="relative">
      <section>
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
        <div className="flex flex-nowrap relative overflow-x-auto gap-3 my-4">
          {isFetching ? (
            [1, 2, 3, 4, 5].map((x) => {
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
            <div className="flex gap-8">
              {[1, 2, 3].map((item) => (
                <Discount key={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <Typography variant="h4" sx={{ fontWeight: "700", fontSize: "30px" }}>
          Order.uk Popular Categories 🤩
        </Typography>
        <div className="flex flex-nowrap gap-3 my-4 overflow-x-auto">
          {isFetching
            ? [1, 2, 3, 4].map((x) => {
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
            : [1, 2, 3, 4, 5].map((x) => {
                return <Category key={x} />;
              })}
        </div>
      </section>

      <section>
        <Typography variant="h4" sx={{ fontWeight: "700", fontSize: "30px" }}>
          Popular Restaurants
        </Typography>
        <div className="flex flex-nowrap gap-3 my-4 overflow-x-auto">
          {isFetching
            ? [1, 2, 3, 4].map((x) => {
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
            : [1, 2, 3, 4, 5].map((x) => {
                return <ResturantCard key={x} />;
              })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
