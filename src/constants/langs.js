import React from 'react';
import {Text, Linking} from 'react-native';
import {apply} from '../theme/OsmiProvider';

const openGithub = () => {
  Linking.openURL('https://github.com/marzukiberg/ucup_dl');
};

export const lang_en = {
  dashboard: {
    subtitle: 'A simple tool to download youtube videos/audios',
    instructions: {
      title: 'How to use',
      steps: [
        [
          'Open the ',
          <Text style={apply('font-bold')}>YouTube's</Text>,
          ' app',
        ],
        'Find the video you want to download',
        [
          'Open the video and click the ',
          <Text style={apply('font-bold')}>Share</Text>,
          ' button',
        ],
        [
          'Select the ',
          <Text style={apply('font-bold')}>Ucup DL</Text>,
          ' app',
        ],
        'You will be redirected to this page',
        [
          'Press the ',
          <Text style={apply('font-bold')}>Copy</Text>,
          ' or ',
          <Text style={apply('font-bold')}>Download</Text>,
          ' button',
        ],
        'Done, enjoy your download :)',
      ],
    },
    downloads: {
      loadingText: 'Loading video info...',
      panelTitle: 'Download',
      title: 'Video Title',
      mediaType: 'Type',
      quality: 'Quality',
      btnCopy: 'Copy link',
      btnDownload: 'Download',
    },
    about: [
      'Enjoying this app?\n Star this project on ',
      <Text onPress={openGithub} style={[apply('text-red-500 font-bold')]}>
        Github
      </Text>,
    ],
  },
};

export const lang_id = {
  dashboard: {
    subtitle: 'Sebuah alat sederhana untuk mendownload video / audio youtube',
    instructionsTitle: 'Cara menggunakan:',
    instructions: {
      title: 'Cara menggunakan',
      steps: [
        ['Buka aplikasi ', <Text style={apply('font-bold')}>YouTube</Text>],
        'Cari video yang ingin didownload',
        [
          'Buka video dan klik tombol ',
          <Text style={apply('font-bold')}>Bagikan</Text>,
        ],
        ['Pilih aplikasi ', <Text style={apply('font-bold')}>Ucup DL</Text>],
        'Anda akan diarahkan ke halaman ini',
        [
          'Tekan tombol ',
          <Text style={apply('font-bold')}>Salin</Text>,
          ' atau ',
          <Text style={apply('font-bold')}>Download</Text>,
        ],
        'Selesai, nikmati hasil download-mu :)',
      ],
    },
    downloads: {
      loadingText: 'Memuat info video...',
      panelTitle: 'Unduh',
      title: 'Judul Video',
      mediaType: 'Tipe',
      quality: 'Kualitas',
      btnCopy: 'Salin tautan',
      btnDownload: 'Unduh',
    },
    about: [
      'Menikmati aplikasi ini?\n Berikan bintang pada proyek ini di ',
      <Text onPress={openGithub} style={[apply('text-red-500 font-bold')]}>
        Github
      </Text>,
    ],
  },
};
