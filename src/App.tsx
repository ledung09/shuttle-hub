import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TableFooter,
  TextField,
} from "@mui/material";
import { Gender } from "./types/interface";
import { CircleCheckBig, FilePlus, Filter, PenLine, X } from "lucide-react";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

function FilterMenu() {
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

function createData(
  id: number,
  name: string,
  gender: Gender,
  potential: boolean,
  monthRecord: boolean[]
) {
  return { id, name, gender, potential, monthRecord };
}

const rows = [
  createData(1, "Frozen yoghurt", "M", true, []),
  createData(2, "Ice cream sandwich", "F", false, []),
  createData(3, "Eclair", "M", true, []),
  createData(3, "Eclair", "M", true, []),
  createData(4, "Cupcake", "F", false, []),
  createData(5, "Gingerbread", "M", false, []),
  createData(6, "Frozen yoghurt", "M", true, []),
  createData(7, "Ice cream sandwich", "F", false, []),
  createData(8, "Eclair", "M", true, []),
  createData(9, "Eclair", "M", true, []),
  createData(10, "Cupcake", "F", false, []),
  createData(11, "Gingerbread", "M", false, []),
];

export default function App() {
  return (
    <div className="w-full container pt-2">
      <div className="flex items-center mb-4">
        <Autocomplete
          className="min-w-96"
          size="small"
          id="free-solo-demo"
          freeSolo
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => <TextField {...params} label="Search" />}
        />
        <div className="ml-auto flex items-center gap-2">
          <FilterMenu />

          <AddPlayerDialog />
        </div>
      </div>
      <UserTable />
    </div>
  );
}

function UserTable() {
  return (
    <>
      <TableContainer className="">
        <Table>
          <TableHead>
            {/* <TableRow>
              <TableCell align="center" colSpan={2}></TableCell>
              <TableCell align="center" colSpan={13}>
                Month
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Potential</TableCell>

              {Array(12)
                .fill(0)
                .map((item, index) => (
                  <TableCell align="center">{index + 1}</TableCell>
                ))}
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rindex) => (
              <>
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell padding="checkbox" align="center">
                    {row.gender}
                  </TableCell>
                  <TableCell align="center">
                    {row.potential ? "Yes" : "No"}
                  </TableCell>
                  {Array(12)
                    .fill(0)
                    .map((item, index) => (
                      <TableCell align="center" padding="checkbox">
                        {/* <Checkbox
                          size="small"
                          checked
                          className="pointer-events-none"
                        /> */}
                        <CircleCheckBig className="w-4 h-4 mx-auto text-pending" />
                      </TableCell>
                    ))}
                  <TableCell padding="checkbox" align="center">
                    <EditInfoDialog />
                  </TableCell>
                  <TableCell padding="checkbox" align="center">
                    <DeleteDialog />
                  </TableCell>
                </TableRow>
                {rindex === rows.length - 1 && (
                  <TableRow>
                    <TableCell align="center" colSpan={4}>
                      <span className="font-medium">Paid count per month</span>
                    </TableCell>
                    {Array(12)
                      .fill(0)
                      .map((item, index) => (
                        <TableCell align="center" padding="checkbox">
                          <span className="font-medium">0</span>
                        </TableCell>
                      ))}
                    <TableCell align="center" colSpan={2}></TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function SummaryRow() {
  return (
    <TableRow>
      <TableCell align="center" colSpan={2}></TableCell>
      <TableCell align="center" colSpan={13}>
        Month
      </TableCell>
    </TableRow>
  );
}

function AddPlayerDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        className="ml-auto"
        aria-label="delete"
        onClick={handleClickOpen}
      >
        <FilePlus className="w-4 h-4 mr-2" />
        Add
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          <span className="font-bold capitalize">add player</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in player information below!
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Full name"
            type="text"
            fullWidth
            variant="standard"
          />
          <div className="flex mt-5 gap-8">
            <div className="basis-1/2">
              <TextField
                sx={{ minWidth: 200 }}
                select // tell TextField to render select
                label="Gender"
                className="text-start w-full"
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
            <div className="basis-1/2">
              <TextField
                sx={{ minWidth: 200 }}
                select // tell TextField to render select
                label="Potential"
                className="text-start w-full"
                size="small"
              >
                <MenuItem key={1} value="yes">
                  Yes
                </MenuItem>
                <MenuItem key={2} value="no">
                  No
                </MenuItem>
              </TextField>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function EditInfoDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <PenLine className="w-4 h-4 m-auto cursor-pointer p-0" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span className="font-bold capitalize">edit payment information</span>
        </DialogTitle>
        <DialogContent>
          <div className="flex-col gap-1">
            <p>
              Name: <span className="font-medium">Đinh Lê Dũng</span>
            </p>
            <p>
              Gender: <span className="font-medium">M</span>
            </p>
            <p>
              Potential: <span className="font-medium">Yes</span>
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <PlayerPaymentTable />
            <PlayerPaymentTable />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function DeleteDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="delete" onClick={handleClickOpen}>
        <X className="w-4 h-4 text-red-600 m-auto cursor-pointer p-0" />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          <span className="font-bold capitalize">delete player</span>
        </DialogTitle>
        <DialogContent>
          <p className=" mb-2">
            Do you wish to <span className="text-wrong">delete</span> this
            player?
          </p>
          <div className="flex-col gap-1">
            <p>
              Name: <span className="font-medium">Đinh Lê Dũng</span>
            </p>
            <p>
              Gender: <span className="font-medium">M</span>
            </p>
            <p>
              Potential: <span className="font-medium">Yes</span>
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="error" onClick={handleClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function PlayerPaymentTable() {
  return (
    <TableContainer className="border rounded-md">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Month</TableCell>
            <TableCell align="center">Collector</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rindex) => (
            <>
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{rindex + 1}</TableCell>
                <TableCell align="center" padding="checkbox">
                  <SelectLabels />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SelectLabels() {
  const [age, setAge] = React.useState("nil");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <TextField
      sx={{ m: 1, minWidth: 120 }}
      value={age}
      onChange={(e) => setAge(e.target.value)}
      select // tell TextField to render select
      label="Name"
      className="text-start"
      size="small"
    >
      <MenuItem key={1} value="nil">
        Not paid
      </MenuItem>
      <MenuItem key={2} value="dung">
        Dũng
      </MenuItem>
      <MenuItem key={3} value="huy">
        Huy
      </MenuItem>
      <MenuItem key={4} value="khanh">
        Khánh
      </MenuItem>
      <MenuItem key={5} value="minh">
        Minh
      </MenuItem>
    </TextField>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
