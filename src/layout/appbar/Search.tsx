import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material/styles'

export const Search = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: '100%',
        ml: { xs: 0, md: 1 },
      }}
    >
      <FormControl sx={{ width: { xs: '100%', md: 224, marginLeft: '15px' } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5, color: '#1a1a1a' }}>
              <SearchIcon />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          placeholder="Ctrl + F"
          color='success'
        />
      </FormControl>
    </Box>
  )
}
