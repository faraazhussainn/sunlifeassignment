import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [googleStatus, setGoogleStatus] = useState(null);
  const [amazonStatus, setAmazonStatus] = useState(null);
  const [allStatus, setAllStatus] = useState(null);

  const fetchGoogleStatus = async () => {
    try {
      const response = await axios.get('/v1/google-status');
      setGoogleStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAmazonStatus = async () => {
    try {
      const response = await axios.get('/v1/amazon-status');
      setAmazonStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllStatus = async () => {
    try {
      const response = await axios.get('/v1/all-status');
      setAllStatus(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoogleStatus();
    fetchAmazonStatus();
    fetchAllStatus();