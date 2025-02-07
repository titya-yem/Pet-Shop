import {
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import DatePicker from "react-datepicker";

const AppointmentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [appointmentType, setAppointmentType] = useState("General Checkup");

  const onSubmit = (data: any) => {
    console.log({ ...data, appointmentType, selectedDate });
    toast.success("Appointment booked successfully!", {
      position: "bottom-right",
    });
    reset();
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl w-full max-w-md">
      {/* Appointment Type Selection */}
      <div className="flex gap-3 mb-4">
        {[
          "Vacation",
          "Bathing",
          "Cut and Trim",
          "Food & Supplies",
          "Party",
        ].map((type) => (
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
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className="pl-10 w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            {...register("email")}
            type="email"
            placeholder="Email address"
            className="pl-10 w-full p-3 border rounded-lg"
            required
          />
        </div>

        <div className="relative">
          <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
          <input
            {...register("city")}
            type="text"
            placeholder="Select a city"
            className="pl-10 w-full p-3 border rounded-lg"
            required
          />
        </div>

        {/* Date Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <div className="relative cursor-pointer">
              <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                readOnly
                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                className="pl-10 w-full p-3 border rounded-lg cursor-pointer"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-white p-2 shadow-md rounded-lg">
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
          className="w-full p-3 border rounded-lg"
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
