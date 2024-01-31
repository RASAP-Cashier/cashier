import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Footer, PageTitle, PageTitleWrapper } from '../../../../components';
import { Card, CardContent, CardHeader, Container, Divider, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => onClose(selectedValue);

  const handleListItemClick = value => onClose(value);

  return <Dialog onClose={handleClose} open={open}>
    <DialogTitle>Set backup account</DialogTitle>
    <List sx={{ pt: 0 }}>
      {emails.map(email => <ListItem
        button
        onClick={() => handleListItemClick(email)}
        key={email}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            <PersonIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={email}/>
      </ListItem>)}

      <ListItem
        autoFocus
        button
        onClick={() => handleListItemClick('addAccount')}
      >
        <ListItemAvatar>
          <Avatar>
            <AddIcon/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add account"/>
      </ListItem>
    </List>
  </Dialog>;
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export function Modals() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return <>
    <Helmet>
      <title>Modals - Components</title>
    </Helmet>
    <PageTitleWrapper>
      <PageTitle
        heading="Modals"
        subHeading="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."
        docs="https://material-ui.com/components/dialogs/"
      />
    </PageTitleWrapper>
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Basic Dialog"/>
            <Divider/>
            <CardContent>
              <Typography variant="subtitle1" component="div">
                Selected: {selectedValue}
              </Typography>
              <br/>
              <Button variant="outlined" onClick={handleClickOpen}>
                Open simple dialog
              </Button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    <Footer/>
  </>;
}
