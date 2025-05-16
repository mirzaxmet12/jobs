import { Grid, Card, CardHeader, Avatar } from '@mui/material';
import { Person } from '../store/peopleSlice';

interface Props {
    people: Person[];
}

function People(props: Props) {
    const { people } = props
    console.log(people);

    return (
        <Grid container spacing={2}>
            {people.map(p => (
                <Grid key={p.id}>
                    <Card>
                        <CardHeader
                            avatar={<Avatar>{p.name[0]}</Avatar>}
                            title={p.name}
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default People

