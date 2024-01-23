"use client";
import InfluencerPage from "@/features/projects/pages/admin/influencerPage";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
const Influencer: React.FC = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/influencer/aInfluencer?id=${id}`);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <InfluencerPage influencerData={data} />
    </div>
  );
};
export default Influencer;
