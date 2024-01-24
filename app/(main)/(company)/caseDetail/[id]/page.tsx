"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CaseDetailPage from "@/features/projects/pages/company/caseDetail";

const CaseDetail: React.FC = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/case/aCase?id=${id}`);
      if (result.data) setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <CaseDetailPage caseProps={data} />
    </div>
  );
};
export default CaseDetail;
