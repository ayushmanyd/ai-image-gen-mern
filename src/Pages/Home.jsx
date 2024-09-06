import React, { useState, useEffect } from "react";

import { Card, Loader, FormField } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post.id} {...post} />);
  }
  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Explore others Post
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Browse through a collection of already generated stunning images
        </p>

        <div className="mt-16">
          <FormField />
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
