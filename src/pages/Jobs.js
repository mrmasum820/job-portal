import React from "react";
import { useGetJobsQuery } from "../features/job/jobApi";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/reusable/JobCard";

const Jobs = () => {
  const { data, isLoading, isError } = useGetJobsQuery();
  const navigate = useNavigate();

  return (
    <div className='pt-14'>
      <div className='bg-primary/10 p-5 rounded-2xl'>
        <h1 className='font-semibold text-xl'>Find Jobs</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-4 my-6">
        {data?.data.map((job) => (
          <JobCard key={job._id} jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
