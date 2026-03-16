import Link from "next/link";
import Image from "next/image";

import {
  ArrowUpRight,
  ArrowRight,
  HomeIcon,
  Trophy,
  Users,
  Tag,
  BarChart3,
} from "lucide-react";

import Hint from "./hint";
import CopyEmailButton from "./copy-email-button";

import { Config } from "@/types/config";

/*import { getUpdatedTime } from "@/lib/db";
import { formatTimeAgo } from "@/lib/utils";*/

interface FooterProps {
  config: Config;
}

export const Footer = async ({ config }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  //const updatedAt = await getUpdatedTime();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black transition-colors mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-7 w-full">
        <div className="grid grid-cols-3 md:grid-cols-9 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 col-start-1 md:col-span-4 lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <Link
                href="https://www.budeglobal.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2"
              >
                <Image
                  src={config.org.logo_url}
                  alt={config.org.name}
                  width={26}
                  height={26}
                  className="rounded-md"
                />
                <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                  {config.org.name}
                </span>
              </Link>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Bude Global Enterprise is a technology company
              focused on building high-impact enterprise solutions
              and fostering community-driven open-source projects.
            </p>

            <div className="flex items-center gap-2 sm:gap-4 pt-2 flex-wrap">
              {config.org.socials?.github && (
                <Hint label="GitHub">
                  <Link
                    href={config.org.socials.github}
                    target="_blank"
                    className="text-zinc-400 group/gh hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 sm:p-2 rounded-full transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-5 sm:h-5 dark:invert"
                    />
                  </Link>
                </Hint>
              )}

              {config.org.socials?.email && (
                <Hint label="Email">
                  <Link
                    href={`mailto:${config.org.socials.email}`}
                    className="text-zinc-400 group/mail hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 sm:p-2 rounded-full transition-all duration-200"
                    aria-label="Email"
                  >
                    <Image
                      src="/mail.svg"
                      alt="Email"
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-5 sm:h-5 dark:invert"
                    />
                  </Link>
                </Hint>
              )}

              <Hint label="Slack">
                <Link
                  href="https://budeglobal.slack.com/"
                  target="_blank"
                  className="text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-2 sm:p-2 rounded-full transition-all duration-200"
                  aria-label="Slack"
                >
                  <Image
                    src="/slack.svg"
                    alt="Slack"
                    width={20}
                    height={20}
                    className="w-5 h-5 sm:w-5 sm:h-5"
                  />
                </Link>
              </Hint>
            </div>
          </div>

          <div className="col-span-1 col-start-3 md:col-span-2 lg:col-span-3 lg:col-start-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-3">
              Pages
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#4169E1] transition-colors"
                >
                  <span className="text-zinc-400 group-hover:text-[#4169E1] transition-colors">
                    <HomeIcon className="h-4 w-4" />
                  </span>
                  Home
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>

              <li>
                <Link
                  href="/leaderboard"
                  className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#4169E1] transition-colors"
                >
                  <span className="text-zinc-400 group-hover:text-[#4169E1] transition-colors">
                    <Trophy className="h-4 w-4" />
                  </span>
                  Leaderboard
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>

              <li>
                <Link
                  href="/people"
                  className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#4169E1] transition-colors"
                >
                  <span className="text-zinc-400 group-hover:text-[#4169E1] transition-colors">
                    <Users className="h-4 w-4" />
                  </span>
                  People
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>

              <li>
                <Link
                  href="/analytics"
                  className="group flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#4169E1] transition-colors"
                >
                  <span className="text-zinc-400 group-hover:text-[#4169E1] transition-colors">
                    <BarChart3 className="h-4 w-4" />
                  </span>
                  Analytics
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>

              <li>
                <Link
                  href="/releases"
                  className="group inline-flex w-fit items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#4169E1] transition-colors"
                >
                  <span className="text-zinc-400 group-hover:text-[#4169E1] transition-colors">
                    <Tag className="h-4 w-4" />
                  </span>
                  Releases
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-3 md:col-span-3 md:col-start-auto lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              System Status
            </h3>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="relative flex h-2 w-2 mt-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4169E1] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4169E1]"></span>
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-zinc-900 dark:text-zinc-200">
                    Leaderboard Active
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Scrapes data frequently
                  </p>
                </div>
              </div>

              {/*<div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Data last updated{" "}
                  <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                    {updatedAt && formatTimeAgo(updatedAt)}
                  </span>
                </p>
              </div>*/}
              <div className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
               <p className="text-xs text-zinc-400 dark:text-zinc-500">
                 Updated daily
               </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/leaderboard"
                className="text-xs font-medium text-[#4169E1] flex items-center gap-1 hover:underline"
              >
                View full stats{" "}
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 w-full">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
            © {currentYear} {config.org.name}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="https://www.budeglobal.in/privacy">
              Privacy Policy
            </Link>
            <Link href="https://www.budeglobal.in/tos">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};