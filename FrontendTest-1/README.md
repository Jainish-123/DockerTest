# Assignment 1

- Date Created: 05 June 2024
- Last Modification Date: 05 June 2024

## Personal Task URLs

- Netlify URL: <https://main--jainish-patel-csci-5709-web-a1.netlify.app/>
- Assignment 1 Gitlab Repository URL: <https://git.cs.dal.ca/jbp/csci-5709-assignments/-/tree/main/Assignment1/project-list?ref_type=heads>

## Authors

- [Jainish Patel](jn891368@dal.ca)

## Getting Started

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
    npm (Comes with node.js installation)
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

- Install Node.js (to use npm)

- Goto https://nodejs.org/en/download and download the LTS installer as per your OS.

- Run the installer.

- Accept License Agreement.

- Choose Installation path.

- Keep the default installation settings and click next.

- Skip the optional installation window and click next and click install.

- To check the installation, run the below commands.

```
node -v
```

Sample Output: v18.12.1

```
npm -v
```

Sample Output: 8.19.2

**Install React and related libraries**

```
npm install
```

## Deployment

Link the GitHub/GitLab repository with Netlify. Then, use the below site configurations:

- Base directory:
- Build command: npm run build
- Publish directory:

## Built With

- [React](https://react.dev/) - The Frontend Library
- [npm](https://www.npmjs.com/) - Dependency management

## Sources Used

### src/components/SearchBar.tsx

Lines 5-51

```
const SearchBar: React.FC = () => {
    const StyledTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        '& .MuiInputBase-root': {
            backgroundColor: '#1f2937',
            color: 'white',
            height: '40px',
        },
        '& .MuiInputBase-input': {
            padding: '10px 14px',
        },
        '& .MuiInputBase-input::placeholder': {
            color: 'white',
        },
        '& .MuiInputLabel-root': {
            color: 'white',
        },
    });
    return (
        <Box className="flex justify-between items-center my-6 space-x-4">
            <StyledTextField
                label="Find..."
                variant="outlined"
                className="flex-grow"
            />
            <Button
                variant="contained"
                className="bg-gradient-to-r from-blue-600 to-black text-white rounded-md shadow-md"
                style={{ height: '40px', minWidth: '100px' }}
            >
                Create New
            </Button>
        </Box>


    );
};
```

The code above was created by adapting the code from <https://medium.com/@enayetflweb/part-20-exploring-material-ui-navbar-app-bar-with-search-field-part-3-435606ace1b4/> as shown below:

```
const Search = styled(‘div’)(({ theme }) => ({
position: ‘relative’,
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
‘&:hover’: {
backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginLeft: 0,
width: ‘100%’,
[theme.breakpoints.up(‘sm’)]: {
marginLeft: theme.spacing(1),
width: ‘auto’,
},
}));

const SearchIconWrapper = styled(‘div’)(({ theme }) => ({
padding: theme.spacing(0, 2),
height: ‘100%’,
position: ‘absolute’,
pointerEvents: ‘none’,
display: ‘flex’,
alignItems: ‘center’,
justifyContent: ‘center’,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: ‘inherit’,
width: ‘100%’,
‘& .MuiInputBase-input’: {
padding: theme.spacing(1, 1, 1, 0),
// vertical padding + font size from searchIcon
paddingLeft: `calc(1em + ${theme.spacing(4)})`,
transition: theme.transitions.create(‘width’),
[theme.breakpoints.up(‘sm’)]: {
width: ‘12ch’,
‘&:focus’: {
width: ‘20ch’,
},
},
},
}));

export default function SearchAppBar() {
return (
<Box sx={{ flexGrow: 1 }}>
<AppBar position=”static”>
<Toolbar>
<IconButton
size=”large”
edge=”start”
color=”inherit”
aria-label=”open drawer”
sx={{ mr: 2 }}
>
<MenuIcon />
</IconButton>
<Typography
variant=”h6"
noWrap
component=”div”
sx={{ flexGrow: 1, display: { xs: ‘none’, sm: ‘block’ } }}
>
MUI
</Typography>
<Search>
<SearchIconWrapper>
<SearchIcon />
</SearchIconWrapper>
<StyledInputBase
placeholder=”Search…”
inputProps={{ ‘aria-label’: ‘search’ }}
/>
</Search>
</Toolbar>
</AppBar>
</Box>
);
}

```

## Acknowledgments

- I would like to express my gratitude to the creators and developers of the above sources for gving lots of ideas and providing best pracicies for a search bar functionality. This has really helped me to develop things efficiently.

- I would also like to mention below source for efficient development.

- “React,” React.dev. [Online]. Available: https://react.dev/. [Accessed: 28-May-2024].

- “Node.Js — download,” Nodejs.org. [Online]. Available: https://nodejs.org/en/download. [Accessed: 28-May-2024].

- “Netlify app,” Netlify.com. [Online]. Available: https://app.netlify.com/. [Accessed: 05-Jun-2024].
