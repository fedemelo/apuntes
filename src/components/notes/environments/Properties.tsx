import React, { Fragment } from 'react';
import { Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import convertToRomanNumeral from '@/components/utils/convertToRomanNumeral';
import generateIdAutomatically from '@/components/utils/generateIdAutomatically';

interface Property {
  name: string | React.ReactNode;
  formula: string | React.ReactNode;
  note?: string | React.ReactNode;
}

interface PropertiesProps {
  title?: string;
  description?: string | React.ReactNode;
  properties: Property[];
  initialCountValue?: number;
  id?: string;
}

const SectionAccordion = styled.div`
  margin: 1em 0;
`;

const RomanNumeral = styled.span`
  display: inline-block;
  min-width: 1.5em;
  text-align: right;
  margin-right: 0.5em;
`;

const PropertyContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NoteTypography = styled(Typography)`
  padding-left: calc(1.5em + 0.5em);
`;

export default function Properties({ title, description, properties, initialCountValue: startNumber = 1, id }: PropertiesProps) {
  id = id || generateIdAutomatically(title);

  return (
    <SectionAccordion id={id}>
      {title && <h4>{title}</h4>}
      {description && (typeof description === 'string' ? <p>{description}</p> : description)}
      <Grid container spacing={1} p={"0 0 0 1em"}>
        {properties.map((property, index) => (
          <Fragment key={index}>
            <Grid item xs={5} container alignItems="center" paddingInlineEnd={3}>
              <PropertyContainer>
                <RomanNumeral>{convertToRomanNumeral(startNumber + index, true) + ". "}</RomanNumeral>
                {property.name}
              </PropertyContainer>
            </Grid>
            <Grid item xs={7} container alignItems="center">
              <Typography>{property.formula}</Typography>
            </Grid>
            {property.note && (
              <Grid item xs={12}>
                <NoteTypography color="textSecondary">
                  {property.note}
                </NoteTypography>
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
    </SectionAccordion>
  );
};
