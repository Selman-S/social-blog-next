'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Owner } from '@/types/types';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import useUsersCall from '@/service/useUsersCall';

export default function UserCard({ user }: { user: Owner }) {

 const { deleteUser } = useUsersCall()




 return (
  <Card sx={{ maxWidth: 345 }}>
   <CardHeader
    avatar={
     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      <Image src={user.picture} alt={user.firstName} width={40} height={40} />
     </Avatar>
    }
    action={
     <IconButton aria-label="settings">
      <MoreVertIcon />
     </IconButton>
    }
    title={user.firstName + ' ' + user.lastName}
    subheader={user.id}
   />
   <Image
    src={user.picture}
    width={345}
    height={200}
    alt={user.firstName}
   />
   <CardContent>
    <Typography variant="body2" color="text.secondary">
     {user.firstName}
    </Typography>
   </CardContent>
   <CardActions disableSpacing>
    <Link href={`/users/${user.id}`}>
     Düzenle
    </Link>
    <Button onClick={() => deleteUser(user.id)} size="small" color="secondary">
     Sil
    </Button>

   </CardActions>

  </Card >
 );
}