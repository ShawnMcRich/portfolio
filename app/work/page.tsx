import type { Metadata } from "next";
import { WorkPage } from "../site";
export const metadata: Metadata = { title: "Work", description: "Selected product case studies by Shahin Ghanizadeh." };
export default function Work() { return <WorkPage locale="en"/>; }
