
import React, { useState, useContext, useEffect } from "react";
import { Card, CardBody, Image, CardFooter, Pagination } from "@nextui-org/react";
import { AuthContext } from "./context/AuthContext";
import { fetchAdvertisements } from "./api/authApi";


export default function MainBody() { 
  const sharedState = useContext(AuthContext);
  const { ads, setAds, authToken } = sharedState;

  const [page, setPage] = useState(1);
  const cardsPerPage = 24;

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToDisplay = ads.slice(startIndex, endIndex);

  const totalPages = Math.ceil(ads.length / cardsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    async function handleAdvertisements() {
      const data = await fetchAdvertisements(authToken)
      setAds(data)
    }
    if (authToken) {
      handleAdvertisements()
    }
      }, [authToken])

  return (
    <main className="dark text-foreground bg-background h-screen">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 h-5/8 ">
          {cardsToDisplay.map((ad, index) => (
            <Card 
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-4 ">

                <p>Year: {ad.car.manufacture_year}</p>
                <p>Make: {ad.car.car_model.make}</p>
                <p>Model: {ad.car.car_model.model}</p>

              </CardBody>
              <CardFooter className="text-small">

                <b>{ad.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            showControls
            total={totalPages}
            current={page}
            onChange={handlePageChange}
          />
        </div>
    </main>
  );
}