import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  className?: string;
};

function PageTitle({ title, className }: Props) {
  return <h1 className={cn("text-2xl font-semibold", className)}>PageTitle</h1>;
}

PageTitle.propTypes = {};

export default PageTitle;
