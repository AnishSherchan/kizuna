import employment_service from "@/public/assets/images/service1.png";
import car_support from '@/public/assets/images/service2.png'
import legal_solutions from "@/public/assets/images/service3.png"

export const companyEmail = "info@kizuna.com";
export const phoneNumber = "+81 565-50-5535";

export const address = "Nagpokhari Marg, Nepal";

export const services = [
  {
    path: "employment-support",
    service: "service1_title",
    shortDescription: "service1_description",
    image:employment_service
  },
  {
    path: "car-life-support",
    service: "service2_title",
    shortDescription: "service2_description",
    image:car_support
  },
  {
    path: "legal-support",
    service: "service3_title",
    shortDescription: "service3_description",
    image:legal_solutions
  },
];
