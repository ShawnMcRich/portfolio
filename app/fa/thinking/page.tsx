import type { Metadata } from "next";
import { ThinkingPage } from "../../site";
export const metadata: Metadata = { title: "دیدگاه های محصول", description: "یادداشت های کاربردی محصول از سیستم هایی که شاهین غنی زاده ساخته و به کار انداخته است." };
export default function PersianThinking() { return <ThinkingPage locale="fa"/>; }
