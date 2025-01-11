import { Snackbar, Alert } from '@mui/material'
import React from 'react'

const SnackbarAlert = ({ snackbar, handleCloseSnackbar }) => {
      return (
            <Snackbar open={snackbar.open} onClose={handleCloseSnackbar} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}>
                  <Alert
                        onClose={handleCloseSnackbar}
                        severity={snackbar.type}
                        variant="filled"
                        sx={{ width: '100%' }}
                  >
                        {snackbar.message}
                  </Alert>
            </Snackbar>
      )
}

export default SnackbarAlert
