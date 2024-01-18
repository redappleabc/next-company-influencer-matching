"use client";
import CompanyPage from "@/features/projects/pages/admin/companyPage";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
const Company: React.FC = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/company/aCompany?id=${id}`);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <CompanyPage companyData={data} />
    </div>
  );
};
export default Company;
