/* eslint-disable max-len */
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Card,
    Grid,
    Box,
    Button,
    ButtonGroup
} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import Title from '../components/title';


function Faq() {
    const faqs = [
        {
            question: "How many eggs are there?",
            answer: "9"
        },
        {
            question: "How many chickens lay eggs?",
            answer: "1"
        }
    ];

    const renderAccordion = (listFaqs) => {
        const faqs = listFaqs;
        return (
            faqs.map(faq => (
            <Accordion TransitionProps={{ unmountOnExit: true }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                </AccordionDetails>
            </Accordion>))
        );
    };

    return (
        <div>
            <Title title="Frequently Asked Questions"/>
            <Card
                variant="outlined"
            >
                <Box
                    sx={{
                        padding: 5,
                    }}>
                    <Grid container spacing={7} justify="space-between">
                        <Grid item xs="auto">
                            <Typography variant="h4" component="h4" align="center" gutterBottom>Frequently Asked Questions</Typography>
                        </Grid>
                        <Grid item xs="auto">
                            <ButtonGroup
                                className="Options"
                                orientation="horizontal"
                                variant="contained"
                            >
                                <Button
                                    className="Options"
                                    variant="contained"
                                    color={'primary'}
                                    startIcon={<AddIcon />}
                                    onClick={() => this.setState({
                                        showCreateFAQ: true,
                                    })}
                                >
                                    Add FAQ
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    {faqs.length > 0 && renderAccordion(faqs)}
                    {faqs.length < 1 && <Typography
                        variant="p6"
                        align="center"
                        gutterBottom>
                        No FAQs to display</Typography>}
                </Box>
            </Card>
        </div>
    );

}

export default Faq;
