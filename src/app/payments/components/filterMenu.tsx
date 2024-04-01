import React from "react";
import { Button, Checkbox, TextField } from "@mui/material";
import { Filter } from "lucide-react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export function FilterMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        variant="outlined"
        color="secondary"
      >
        <Filter className="w-4 h-4 mr-2" />
        Filter
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div className="flex flex-col">
          <div className="flex gap-1 mx-1">
            <Checkbox />
            <TextField
              sx={{ m: 1, minWidth: 160 }}
              select // tell TextField to render select
              label="Paid this month"
              className="text-start"
              size="small"
            >
              <MenuItem key={1} value="male">
                Paid
              </MenuItem>
              <MenuItem key={2} value="female">
                Not pay
              </MenuItem>
            </TextField>
          </div>
          <div className="flex gap-1 mx-1">
            <Checkbox />
            <TextField
              sx={{ m: 1, minWidth: 160 }}
              select // tell TextField to render select
              label="Gender"
              className="text-start"
              size="small"
            >
              <MenuItem key={1} value="male">
                Male
              </MenuItem>
              <MenuItem key={2} value="female">
                Female
              </MenuItem>
            </TextField>
          </div>
          <div className="flex gap-1 mx-1">
            <Checkbox />
            <TextField
              sx={{ m: 1, minWidth: 160 }}
              select // tell TextField to render select
              label="Potential"
              className="text-start"
              size="small"
            >
              <MenuItem key={1} value="male">
                Yes
              </MenuItem>
              <MenuItem key={2} value="female">
                No
              </MenuItem>
            </TextField>
          </div>
        </div>
      </StyledMenu>
    </div>
  );
}
