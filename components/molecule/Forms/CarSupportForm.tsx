"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import React from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { toast } from "sonner";
import * as Yup from "yup";

import { cn } from "@/lib/utils";
import { format } from "date-fns"; // Make sure this is imported

import Text from "@/components/atom/Text";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CarSupportForm = () => {
  const jobSchema = useFormik({
    initialValues: {
      formType: "trade",
      name: "",
      mail: "",
      phone: "",
      address: "",

      brand: "",
      model: "",
      fuel: "",
      color: "",
      kilometer: "",
      priceRange: "",

      main_brand: "",
      main_model: "",
      main_date: "",
      main_km: "",
      main_expiry: "",
      termsPrivacyAccepted: false,
    },
    validationSchema: Yup.object({
      formType: Yup.string().required(),
      name: Yup.string().required("Name is Required."),
      mail: Yup.string()
        .email("Invalid email format.")
        .required("Email is required."),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Number must be 10 digits")
        .required("Phone number is required"),
      address: Yup.string().required("Address is required."),

      brand: Yup.string().when("formType", ([formType], schema) => {
        return formType === "trade"
          ? schema.required("Brand is requierd")
          : schema.notRequired();
      }),
      model: Yup.string().when("formType", ([formType], schema) =>
        formType === "trade"
          ? schema.required("Model is required")
          : schema.notRequired()
      ),
      fuel: Yup.string().when("formType", ([formType], schema) =>
        formType === "trade"
          ? schema.required("Fuel Type is required")
          : schema.notRequired()
      ),
      color: Yup.string().when("formType", ([formType], schema) =>
        formType === "trade"
          ? schema.required("Color is required")
          : schema.notRequired()
      ),
      kilometer: Yup.string().when("formType", ([formType], schema) =>
        formType === "trade"
          ? schema.required("Kilometer range is required")
          : schema.notRequired()
      ),
      priceRange: Yup.string().when("formType", ([formType], schema) =>
        formType === "trade"
          ? schema.required("Price range is required")
          : schema.notRequired()
      ),

      // Maintenance fields required only if formType is "maintenance"
      main_brand: Yup.string().when("formType", ([formType], schema) =>
        formType === "maintenance"
          ? schema.required("Brand/Manufacture name is required")
          : schema.notRequired()
      ),
      main_model: Yup.string().when("formType", ([formType], schema) =>
        formType === "maintenance"
          ? schema.required("Model name is required")
          : schema.notRequired()
      ),
      main_date: Yup.string().when("formType", ([formType], schema) =>
        formType === "maintenance"
          ? schema.required("Date of Manufacture is required")
          : schema.notRequired()
      ),
      main_km: Yup.string().when("formType", ([formType], schema) =>
        formType === "maintenance"
          ? schema.required("Kilometers driven is required")
          : schema.notRequired()
      ),
      main_expiry: Yup.string().when("formType", ([formType], schema) =>
        formType === "maintenance"
          ? schema.required("Expiry Date of Shaken is required")
          : schema.notRequired()
      ),
      termsPrivacyAccepted: Yup.boolean()
        .oneOf([true], "You must accept the terms and privacy policy.")
        .required("You must accept the terms and privacy policy."),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values, ...values.formType);
      toast.success("Car Support Application Submission Completed", {
        description: "We will contact you with in 3 business days!",
      });
      resetForm();
    },
  });

  const [open, setOpen] = React.useState(false);
  const [expiryOpen, setExpiryOpen] = React.useState(false);

  const t = useTranslations("form");
  const ta = useTranslations("CarLifeSupportPage");

  return (
    <div className="w-full">
      <div className=" w-full xl:max-w-[525px] xl:min-w-[525px]  flex flex-col gap-[25px] xl:p-[10px]">
        <div>
          <h3 className=" text-[24px]">
            {ta("title")}
            <span className=" text-primary font-medium">
              {" "}
              {t("legalFormSpan")}
            </span>
          </h3>
        </div>

        <form
          onSubmit={jobSchema.handleSubmit}
          className="flex flex-col gap-[20px]"
        >
          <div className="flex flex-col gap-[5px]">
            <Label>{t("name")}</Label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={jobSchema.handleChange}
              value={jobSchema.values.name}
              onBlur={jobSchema.handleBlur}
              placeholder={t("namePlaceholder")}
              className="w-full h-[45px] text-[14px] rounded-[10px]"
            />
            {jobSchema.touched.name && jobSchema.errors.name && (
              <p className="text-red-500 text-sm ">{jobSchema.errors.name}</p>
            )}
          </div>

          <div className=" flex flex-col gap-[5px]">
            <Label>{t("email")}</Label>
            <Input
              type="email"
              id="mail"
              name="mail"
              onChange={jobSchema.handleChange}
              value={jobSchema.values.mail}
              onBlur={jobSchema.handleBlur}
              placeholder={t("emailPlaceholder")}
              className="w-full h-[45px] text-[14px] rounded-[10px]"
            />
            {jobSchema.touched.mail && jobSchema.errors.mail && (
              <p className="text-red-500 text-sm ">{jobSchema.errors.mail}</p>
            )}
          </div>

          <div className=" flex flex-col gap-[5px]">
            <Label>{t("phone")}</Label>
            <Input
              type="number"
              className="w-full h-[45px] text-[14px] rounded-[10px]"
              placeholder={t("phonePlaceholder")}
              id="phone"
              name="phone"
              onChange={jobSchema.handleChange}
              value={jobSchema.values.phone}
              onBlur={jobSchema.handleBlur}
            />
            {jobSchema.touched.phone && jobSchema.errors.phone && (
              <p className="text-red-500 text-sm ">{jobSchema.errors.phone}</p>
            )}
          </div>

          <div className=" flex flex-col gap-[5px]">
            <Label>{t("address")}</Label>
            <Input
              id="address"
              name="address"
              onChange={jobSchema.handleChange}
              value={jobSchema.values.address}
              onBlur={jobSchema.handleBlur}
              type="string"
              className="w-full h-[45px] text-[14px] rounded-[10px]"
              placeholder={t("addressPlaceholder")}
            />
            {jobSchema.touched.address && jobSchema.errors.address && (
              <p className="text-red-500 text-sm ">
                {jobSchema.errors.address}
              </p>
            )}
          </div>

          <Tabs
            value={jobSchema.values.formType}
            onValueChange={(value) =>
              jobSchema.setFieldValue("formType", value)
            }
          >
            <div className="w-full  flex items-center justify-center">
              <TabsList className="p-[10px] bg-muted gap-[20px]">
                <TabsTrigger value="trade" className="p-[15px]">
                  <Text variant="subheading">{t("trade")}</Text>
                </TabsTrigger>
                <TabsTrigger value="maintenance" className="p-[15px]">
                  <Text variant="subheading">{t("maintenance")}</Text>
                </TabsTrigger>
              </TabsList>
            </div>

            <div>
              <Text variant="card_text" className="font-bold">
                {t("vehicle")}
              </Text>
            </div>

            <TabsContent value="maintenance">
              {/* Maintenance Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>{t("main_brand")}</Label>
                <Input
                  id="main_brand"
                  name="main_brand"
                  onChange={jobSchema.handleChange}
                  onBlur={jobSchema.handleBlur}
                  value={jobSchema.values.main_brand}
                  placeholder={t("main_brand_place")}
                />
                {jobSchema.touched.main_brand &&
                  jobSchema.errors.main_brand && (
                    <p className="text-red-500 text-sm">
                      {jobSchema.errors.main_brand}
                    </p>
                  )}
              </div>
            </TabsContent>

            <TabsContent value="maintenance">
              {/* Maintenance Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>Model name</Label>
                <Input
                  id="main_model"
                  name="main_model"
                  onChange={jobSchema.handleChange}
                  onBlur={jobSchema.handleBlur}
                  value={jobSchema.values.main_model}
                  placeholder={t("main_model_place")}
                />
                {jobSchema.touched.main_model &&
                  jobSchema.errors.main_model && (
                    <p className="text-red-500 text-sm">
                      {jobSchema.errors.main_model}
                    </p>
                  )}
              </div>
            </TabsContent>

            {/* Test */}
            <TabsContent value="maintenance">
              <div className="flex flex-col gap-[5px]">
                <Label>{t("main_date")}</Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-[45px] justify-start text-left font-normal",
                        !jobSchema.values.main_date && "text-muted-foreground"
                      )}
                    >
                      {jobSchema.values.main_date
                        ? format(new Date(jobSchema.values.main_date), "PPP")
                        : t("main_date_place")}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={
                        jobSchema.values.main_date
                          ? new Date(jobSchema.values.main_date)
                          : undefined
                      }
                      onSelect={(selectedDate) => {
                        if (selectedDate) {
                          jobSchema.setFieldValue(
                            "main_date",
                            selectedDate.toISOString().split("T")[0] // Store as 'yyyy-mm-dd'
                          );
                          setOpen(false);
                        }
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>

                {jobSchema.touched.main_date && jobSchema.errors.main_date && (
                  <p className="text-red-500 text-sm">
                    {jobSchema.errors.main_date}
                  </p>
                )}
              </div>
            </TabsContent>

            {/* Test */}

            <TabsContent value="maintenance">
              {/* Maintenance Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>{t("main_km")}</Label>
                <Input
                  id="main_km"
                  name="main_km"
                  onChange={jobSchema.handleChange}
                  onBlur={jobSchema.handleBlur}
                  value={jobSchema.values.main_km}
                  placeholder={t("main_km_place")}
                />
                {jobSchema.touched.main_km && jobSchema.errors.main_km && (
                  <p className="text-red-500 text-sm">
                    {jobSchema.errors.main_km}
                  </p>
                )}
              </div>
            </TabsContent>

            {/* Test */}
            <TabsContent value="maintenance">
              <div className="flex flex-col gap-[5px]">
                <Label>{t("main_expiry")}</Label>
                <Popover open={expiryOpen} onOpenChange={setExpiryOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-[45px] justify-start text-left font-normal",
                        !jobSchema.values.main_expiry && "text-muted-foreground"
                      )}
                    >
                      {jobSchema.values.main_expiry
                        ? format(new Date(jobSchema.values.main_expiry), "PPP")
                        : t("main_date_place")}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={
                        jobSchema.values.main_expiry
                          ? new Date(jobSchema.values.main_expiry)
                          : undefined
                      }
                      onSelect={(selectedDate) => {
                        if (selectedDate) {
                          jobSchema.setFieldValue(
                            "main_expiry",
                            selectedDate.toISOString().split("T")[0] // Format: yyyy-mm-dd
                          );
                          setExpiryOpen(false);
                        }
                      }}
                      disabled={(date) => date <= new Date()}
                      captionLayout="dropdown"
                      fromYear={new Date().getFullYear()}
                      toYear={new Date().getFullYear() + 20}
                    />
                  </PopoverContent>
                </Popover>

                {jobSchema.touched.main_expiry &&
                  jobSchema.errors.main_expiry && (
                    <p className="text-red-500 text-sm">
                      {jobSchema.errors.main_expiry}
                    </p>
                  )}
              </div>
            </TabsContent>

            {/* Test */}

            <TabsContent value="trade">
              {/* Trade Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>{t("brand")}</Label>
                <Input
                  id="brand"
                  name="brand"
                  onChange={jobSchema.handleChange}
                  onBlur={jobSchema.handleBlur}
                  value={jobSchema.values.brand}
                  placeholder={t("brand_placeholder")}
                />
                {jobSchema.touched.brand && jobSchema.errors.brand && (
                  <p className="text-red-500 text-sm">
                    {jobSchema.errors.brand}
                  </p>
                )}

                {/* Repeat for other trade fields */}
              </div>
            </TabsContent>

            <TabsContent value="trade">
              {/* Trade Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>{t("model")}</Label>
                <Input
                  id="model"
                  name="model"
                  onChange={jobSchema.handleChange}
                  onBlur={jobSchema.handleBlur}
                  value={jobSchema.values.model}
                  placeholder={t("model_placeholder")}
                />
                {jobSchema.touched.model && jobSchema.errors.model && (
                  <p className="text-red-500 text-sm">
                    {jobSchema.errors.model}
                  </p>
                )}

                {/* Repeat for other trade fields */}
              </div>
            </TabsContent>

            <TabsContent value="trade">
              {/* Trade Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>{t("fuel")}</Label>
                <Select
                  name="fuel"
                  value={jobSchema.values.fuel}
                  onValueChange={(value) =>
                    jobSchema.setFieldValue("fuel", value)
                  }
                >
                  <SelectTrigger className="w-full h-[45px]">
                    <SelectValue placeholder={t("fuel_placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fuel Type</SelectLabel>
                      <SelectItem value="Gasoline">
                        Gasoline (Petrol)
                      </SelectItem>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Hybrid">
                        Hybrid (Electric + Gasoline)
                      </SelectItem>
                      <SelectItem value="Electric">Electric (EV)</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {jobSchema.touched.fuel && jobSchema.errors.fuel && (
                  <p className="text-red-500 text-sm">
                    {jobSchema.errors.fuel}
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="trade">
              {/* Trade Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>{t("color")}</Label>
                <Select
                  name="color"
                  value={jobSchema.values.color}
                  onValueChange={(value) =>
                    jobSchema.setFieldValue("color", value)
                  }
                >
                  <SelectTrigger className="w-full h-[45px]">
                    <SelectValue placeholder={t("color_placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("color")}</SelectLabel>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Silver">Silver</SelectItem>
                      <SelectItem value="Gray">Gray</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Orange">Orange</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                      <SelectItem value="Yellow">Yellow</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {jobSchema.touched.color && jobSchema.errors.color && (
                  <p className="text-red-500 text-sm">
                    {jobSchema.errors.color}
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="trade">
              {/* Trade Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>{t("kilometer")}</Label>
                <Select
                  name="kilometer"
                  value={jobSchema.values.kilometer}
                  onValueChange={(value) =>
                    jobSchema.setFieldValue("kilometer", value)
                  }
                >
                  <SelectTrigger className="w-full h-[45px]">
                    <SelectValue placeholder={t("kilometer_placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("kilometer")}</SelectLabel>
                      <SelectItem value="0-10000 km">0–10,000 km</SelectItem>
                      <SelectItem value="10,001–50,000 km">
                        10,001–50,000 km
                      </SelectItem>
                      <SelectItem value="50,001–100,000 km">
                        50,001–100,000 km
                      </SelectItem>
                      <SelectItem value="100,001 km and above">
                        100,001 km and above
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {jobSchema.touched.kilometer && jobSchema.errors.kilometer && (
                  <p className="text-red-500 text-sm">
                    {jobSchema.errors.kilometer}
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="trade">
              {/* Trade Fields */}
              <div className="flex flex-col gap-[5px]">
                <Label>Price Range</Label>
                <Select
                  name="priceRange"
                  value={jobSchema.values.priceRange}
                  onValueChange={(value) =>
                    jobSchema.setFieldValue("priceRange", value)
                  }
                >
                  <SelectTrigger className="w-full h-[45px]">
                    <SelectValue placeholder={t("pricerange_placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("pricerange")}</SelectLabel>
                      <SelectItem value="¥0 – ¥300,000">
                        ¥0 – ¥300,000
                      </SelectItem>
                      <SelectItem value="¥300,000-¥500,000">
                        ¥300,000-¥500,000
                      </SelectItem>
                      <SelectItem value="¥500,000-¥1,000,000">
                        ¥500,000-¥1,000,000
                      </SelectItem>
                      <SelectItem value="¥2,000,000 and above">
                        ¥2,000,000 and above
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {jobSchema.touched.priceRange &&
                  jobSchema.errors.priceRange && (
                    <p className="text-red-500 text-sm">
                      {jobSchema.errors.priceRange}
                    </p>
                  )}
              </div>
            </TabsContent>
          </Tabs>

          <div className=" flex flex-col gap-[5px]">
            <div className="flex flex-wrap items-start gap-2">
              <Checkbox
                id="termsPrivacyAccepted"
                name="termsPrivacyAccepted"
                checked={jobSchema.values.termsPrivacyAccepted}
                onCheckedChange={(checked) =>
                  jobSchema.setFieldValue("termsPrivacyAccepted", !!checked)
                }
                onBlur={jobSchema.handleBlur}
              />
              <Label htmlFor="termsPrivacyAccepted" className="text-sm">
                {t("termsPart1")}{" "}
                <Link
                  href="/terms-and-conditions"
                  className="underline text-[#0000FF]"
                  target={"_blank"}
                >
                  {t("terms")}
                </Link>{" "}
                {t("termsPart2")}{" "}
                <Link
                  href="/privacy"
                  className="underline text-[#0000FF]"
                  target={"_blank"}
                >
                  {t("privacy")}
                </Link>{" "}
                {t("termsPart3")}
              </Label>
            </div>
            {jobSchema.touched.termsPrivacyAccepted &&
              jobSchema.errors.termsPrivacyAccepted && (
                <p className="text-red-500 text-sm">
                  {jobSchema.errors.termsPrivacyAccepted}
                </p>
              )}
          </div>

          {/* Button */}
          <div className=" w-full flex justify-end">
            <Button disabled={jobSchema.isSubmitting} type="submit">
              {jobSchema.isSubmitting ? "Sending..." : t("submit")}
              {!jobSchema.isSubmitting && (
                <BiSolidChevronRight className="text-white h-[12px] w-[12px] items-center" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarSupportForm;
