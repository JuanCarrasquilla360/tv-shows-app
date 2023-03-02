import { useMemo } from 'react';

import { Card } from './Card';
import { useSelector } from 'react-redux';

export const List = ({ publisher }: { publisher: string }) => {

    const res = useSelector((state: any) => state.shows);

    return (
        <div className="row row-cols-md-3 row-cols-sm-1 g-3 animate__animated animate__fadeIn"
            style={{ backgroundColor: "#eee" }}>
            {
                res[publisher]?.map((show: any) => {
                    const show1 = { ...show, publisher }
                    return (
                        <Card
                            key={show.id}
                            {...show1}
                        />
                    )
                })
            }
        </div>
    )
}
