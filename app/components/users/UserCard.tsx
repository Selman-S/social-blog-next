import { Owner } from '@/types/types'
import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'


interface UserCardProps {
 user: Owner
}
const UserCard = ({ user }: UserCardProps) => {
 return (
  <Card sx={{ maxWidth: 345 }}>

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
    <Button size="small" color="secondary">
     Sil
    </Button>

   </CardActions>

  </Card >
 )
}

export default UserCard