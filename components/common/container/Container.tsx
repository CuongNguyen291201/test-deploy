import { Container } from '@mui/material'
import { withStyles } from '@mui/styles'
import { PropsWithChildren } from "react"

const ContainerWeb = (props: PropsWithChildren<{}>) => {
    const { children } = props;
    const _Container = withStyles({
        maxWidthXl: {
            padding: 0,
            textAlign: "center",
            maxWidth: "1170px"
        }
    })(Container)

    return (
        <>
            <_Container maxWidth="xl">
                {children}
            </_Container>
        </>
    )
}

export default ContainerWeb