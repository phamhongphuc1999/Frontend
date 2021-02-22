import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function MyApp() {
    return(
        <Document>
            <Page size="A4">
                <View>
                    <Text>Section #1</Text>
                </View>
                <View>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    )
}

export default MyApp;
