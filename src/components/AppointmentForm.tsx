import { FaCalendarAlt, FaEnvelope, FaClock, FaUser } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
// import axios from "axios";
import { Box } from "@radix-ui/themes";

const AppointmentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [appointmentType, setAppointmentType] = useState("General Checkup");

  const onSubmit = async (data: any) => {
    try {
      // await axios.post("backend endpoint", {
      //   ...data,
      //   appointmentType,
      //   selectedDate,
      // }); Send data to backend end point
      console.log({
        ...data,
        appointmentType,
        selectedDate,
      });
      toast.success("Appointment booked successfully!", {
        position: "top-center",
      });
      reset(); // reset form as new afte subbmited
    } catch (error) {
      console.log(error);
      toast.error("Error to book an appointment please contact us");
    }
  };

  const serviceCategories: string[] = [
    "Vacation",
    "Bathing",
    "Cut and Trim",
    "Food & Supplies",
    "Party",
  ];

  return (
    <div className="w-[340px] md:w-[450px] p-6 shadow-lg rounded-lg lg:rounded-l-none max-w-md bg-white">
      {/* Appointment Type Selection */}
      <h2 className="text-2xl font-bold text-center mb-4">
        Schedule an Appointment
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
        {serviceCategories.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 border rounded-lg text-sm transition-all ${
              appointmentType === type
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setAppointmentType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="space-y-4">
          <Box className="relative">
            <FaUser className="absolute left-3 top-4 text-gray-400" />
            <input
              {...register("name")}
              type="text"
              placeholder="Your name"
              className="w-full pl-10 p-3 text-sm md:text-base border rounded-lg"
              required
            />
          </Box>

          <Box className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className="w-full pl-10 p-3 text-sm md:text-base border rounded-lg"
              required
            />
          </Box>
        </div>

        <Box className="relative">
          <FaClock className="absolute left-3 top-4 text-gray-400" />
          <input
            {...register("time")}
            type="time"
            placeholder="Select Time"
            className="w-full pl-10 p-3 text-sm md:text-base border rounded-lg"
            required
          />
        </Box>

        {/* Date Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Box className="relative cursor-pointer">
              <FaCalendarAlt className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                readOnly
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                className="w-full pl-10 last: p-3 text-sm md:text-base border rounded-lg cursor-pointer"
              />
            </Box>
          </PopoverTrigger>
          <PopoverContent className="p-2 shadow-md rounded-lg bg-white">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
            />
          </PopoverContent>
        </Popover>

        <textarea
          {...register("message")}
          placeholder="Additional message"
          className="w-full p-3 text-sm md:text-base border rounded-lg"
        />

        <Button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg w-full"
        >
          Book appointment
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
