import React from "react";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "../styles/Component.scss";
import { LoadMoreButtonProps } from "../interface/component.interface";

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <ChevronRightIcon
        className="button--color "
        sx={{ fontSize: 60 }}
        onMouseEnter={(e) =>
          e.currentTarget.classList.add("common-component--image-enlarged")
        }
        onMouseLeave={(e) =>
          e.currentTarget.classList.remove("common-component--image-enlarged")
        }
      />
    </Button>
  );
};

export default LoadMoreButton;
