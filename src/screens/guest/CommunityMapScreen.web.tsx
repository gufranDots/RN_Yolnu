import { Feather } from '@expo/vector-icons';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/layout/Header';
import {
  Community,
  eastArnhemCommunities,
} from '../../data/eastArnhem';
import { colors, radius, spacing, typography } from '../../theme/tokens';

export function CommunityMapScreen() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community>(
    eastArnhemCommunities[0]
  );

  const mapDocument = useMemo(() => {
    const communityData = JSON.stringify(eastArnhemCommunities);
    return `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          <style>
            html, body, #map { width: 100%; height: 100%; margin: 0; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
            .community-pin {
              width: 26px;
              height: 26px;
              border: 3px solid #fff;
              border-radius: 50% 50% 50% 0;
              background: #B87320;
              box-shadow: 0 2px 7px rgba(0,0,0,.35);
              transform: rotate(-45deg);
            }
            .popup { max-width: 250px; color: #3B2A1E; }
            .popup strong { display: block; font-size: 15px; margin-bottom: 3px; }
            .popup small { display: block; color: #B87320; margin-bottom: 6px; }
            .popup p { margin: 0; line-height: 1.4; color: #6B625B; }
          </style>
        </head>
        <body>
          <div id="map"></div>
          <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
          <script>
            const communities = ${communityData};
            const map = L.map('map', { zoomControl: true });
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            const bounds = [];
            communities.forEach((community) => {
              const icon = L.divIcon({
                className: '',
                html: '<div class="community-pin"></div>',
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                popupAnchor: [0, -28]
              });
              const popup = document.createElement('div');
              popup.className = 'popup';
              const name = document.createElement('strong');
              name.textContent = community.name;
              const location = document.createElement('small');
              location.textContent = community.location;
              const description = document.createElement('p');
              description.textContent = community.description;
              popup.append(name, location, description);
              const marker = L.marker(
                [community.latitude, community.longitude],
                { icon }
              ).addTo(map).bindPopup(popup);
              const select = () => {
                marker.openPopup();
                window.parent.postMessage(
                  { type: 'community-selected', id: community.id },
                  '*'
                );
              };
              marker.on('mouseover', select);
              marker.on('click', select);
              bounds.push([community.latitude, community.longitude]);
            });
            map.fitBounds(bounds, { padding: [35, 35] });
          </script>
        </body>
      </html>`;
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type !== 'community-selected') return;
      const community = eastArnhemCommunities.find(
        (item) => item.id === event.data.id
      );
      if (community) setSelectedCommunity(community);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <Header title="East Arnhem communities" showBack />
      <View style={styles.mapWrap}>
        {React.createElement('iframe', {
          srcDoc: mapDocument,
          title: 'East Arnhem communities map',
          style: styles.iframe,
        })}
        <View pointerEvents="none" style={styles.infoCard}>
          <View style={styles.pin}>
            <Feather name="map-pin" size={21} color={colors.text} />
          </View>
          <View style={styles.infoCopy}>
            <Text style={styles.name}>{selectedCommunity.name}</Text>
            <Text style={styles.location}>{selectedCommunity.location}</Text>
            <Text numberOfLines={3} style={styles.description}>
              {selectedCommunity.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mapWrap: {
    flex: 1,
    position: 'relative',
  },
  iframe: {
    width: '100%',
    height: '100%',
    borderWidth: 0,
  },
  infoCard: {
    position: 'absolute',
    left: spacing.md,
    right: spacing.md,
    bottom: spacing.md,
    minHeight: 118,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  pin: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  infoCopy: {
    flex: 1,
  },
  name: {
    color: colors.text,
    ...typography.h3,
  },
  location: {
    color: colors.textMuted,
    ...typography.caption,
    marginTop: 2,
  },
  description: {
    color: colors.textMuted,
    ...typography.caption,
    marginTop: 4,
  },
});
