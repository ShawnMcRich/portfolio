import type { Metadata } from "next";
import { ThinkingPage } from "../site";
export const metadata: Metadata = { title: "Product Thinking", description: "Practical product notes from systems Shahin Ghanizadeh has built and operated." };
export default function Thinking() { return <ThinkingPage locale="en"/>; }
