import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
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

  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <Header title="East Arnhem communities" showBack />
      <View style={styles.mapWrap}>
        <MapView
          initialRegion={{
            latitude: -12.28,
            longitude: 135.88,
            latitudeDelta: 1.2,
            longitudeDelta: 2.5,
          }}
          mapType="standard"
          style={styles.map}
        >
          {eastArnhemCommunities.map((community) => (
            <Marker
              coordinate={{
                latitude: community.latitude,
                longitude: community.longitude,
              }}
              key={community.id}
              onPress={() => setSelectedCommunity(community)}
              pinColor={colors.primaryDark}
              title={community.name}
            >
              <Callout onPress={() => setSelectedCommunity(community)}>
                <View style={styles.callout}>
                  <Text style={styles.calloutTitle}>{community.name}</Text>
                  <Text style={styles.calloutLocation}>{community.location}</Text>
                  <Text style={styles.calloutBody}>{community.description}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>

        <View style={styles.infoCard}>
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
  },
  map: {
    flex: 1,
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
  callout: {
    width: 240,
    padding: spacing.xs,
  },
  calloutTitle: {
    color: colors.text,
    ...typography.bodyStrong,
  },
  calloutLocation: {
    color: colors.primaryDark,
    ...typography.caption,
    marginTop: 2,
  },
  calloutBody: {
    color: colors.textMuted,
    ...typography.caption,
    marginTop: 5,
  },
});
