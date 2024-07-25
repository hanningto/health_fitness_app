import { Stack, Text } from '@chakra-ui/react'

export const UiTest = () => (
  <Stack
    justify="flex-start"
    align="flex-start"
    spacing="0px"
    overflow="hidden"
    width="1274px"
    height="938px"
    maxWidth="100%"
    background="#FFFFFF"
  >
    <Stack
      paddingX="40px"
      paddingY="12px"
      direction="row"
      justify="space-between"
      align="center"
      spacing="0px"
      borderColor="#E5E8EB"
      borderBottomWidth="1px"
      height="65px"
      alignSelf="stretch"
    >
      <Stack direction="row" justify="flex-start" align="center" spacing="16px">
        <Stack justify="flex-start" align="flex-start" spacing="0px">
          <Stack width="16px" flex="1">
            <Stack
              justify="flex-start"
              align="flex-start"
              spacing="0px"
              width="15px"
              height="15px"
            />
          </Stack>
        </Stack>
        <Stack justify="flex-start" align="flex-start" spacing="0px">
          <Text
            fontFamily="Inter"
            lineHeight="1.28"
            fontWeight="bold"
            fontSize="18px"
            color="#141414"
            alignSelf="stretch"
          >
            FitTrack
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justify="flex-end"
        align="flex-start"
        spacing="32px"
        flex="1"
      >
        <Stack
          direction="row"
          justify="flex-start"
          align="center"
          spacing="36px"
          height="40px"
        >
          <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Text
              fontFamily="Inter"
              lineHeight="1.5"
              fontWeight="medium"
              fontSize="14px"
              color="#141414"
              alignSelf="stretch"
            >
              Overview
            </Text>
          </Stack>
          <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Text
              fontFamily="Inter"
              lineHeight="1.5"
              fontWeight="medium"
              fontSize="14px"
              color="#141414"
              alignSelf="stretch"
            >
              Log
            </Text>
          </Stack>
          <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Text
              fontFamily="Inter"
              lineHeight="1.5"
              fontWeight="medium"
              fontSize="14px"
              color="#141414"
              alignSelf="stretch"
            >
              Explore
            </Text>
          </Stack>
          <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Text
              fontFamily="Inter"
              lineHeight="1.5"
              fontWeight="medium"
              fontSize="14px"
              color="#141414"
              alignSelf="stretch"
            >
              Community
            </Text>
          </Stack>
        </Stack>
        <Stack direction="row" justify="flex-start" align="flex-start">
          <Stack
            paddingX="10px"
            borderRadius="12px"
            direction="row"
            justify="center"
            align="center"
            overflow="hidden"
            height="40px"
            background="#F5F5F5"
          >
            <Stack justify="flex-start" align="center" spacing="0px" flex="1">
              <Stack flex="1" alignSelf="stretch">
                <Stack
                  justify="flex-start"
                  align="center"
                  spacing="0px"
                  width="15px"
                  height="16px"
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            paddingX="10px"
            borderRadius="12px"
            direction="row"
            justify="center"
            align="center"
            overflow="hidden"
            height="40px"
            background="#F5F5F5"
          >
            <Stack justify="flex-start" align="center" spacing="0px" flex="1">
              <Stack flex="1" alignSelf="stretch">
                <Stack
                  justify="flex-start"
                  align="center"
                  spacing="0px"
                  width="18px"
                  height="16px"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack borderRadius="20px" width="40px" height="40px" />
      </Stack>
    </Stack>
    <Stack
      paddingStart="162px"
      paddingEnd="160px"
      paddingY="20px"
      direction="row"
      justify="center"
      align="flex-start"
      spacing="0px"
      width="1303px"
      height="1004px"
      maxWidth="100%"
    >
      <Stack
        paddingY="20px"
        justify="flex-start"
        align="flex-start"
        spacing="0px"
        overflow="hidden"
        width="960px"
        maxWidth="100%"
        background="#FFFFFF"
      >
        <Stack
          padding="16px"
          direction="row"
          justify="space-between"
          align="flex-start"
          spacing="12px"
          alignSelf="stretch"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            width="288px"
            maxWidth="100%"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.25"
              fontWeight="bold"
              fontSize="32px"
              color="#141414"
              alignSelf="stretch"
            >
              Log a workout
            </Text>
          </Stack>
          <Stack
            paddingX="16px"
            borderRadius="12px"
            direction="row"
            justify="center"
            align="center"
            spacing="0px"
            overflow="hidden"
            width="84px"
            height="32px"
            background="#F5F5F5"
          >
            <Stack
              justify="flex-start"
              align="center"
              spacing="0px"
              overflow="hidden"
            >
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="medium"
                fontSize="14px"
                color="#141414"
                alignSelf="stretch"
                textAlign="center"
              >
                Save
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          paddingBottom="12px"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          alignSelf="stretch"
        >
          <Stack
            paddingX="16px"
            direction="row"
            justify="space-between"
            align="flex-start"
            spacing="0px"
            borderColor="blue"
            borderBottomWidth="1px"
            alignSelf="stretch"
          >
            <Stack
              paddingTop="16px"
              paddingBottom="13px"
              justify="center"
              align="center"
              spacing="0px"
              borderColor="red"
              borderBottomWidth="3px"
              flex="1"
            >
                
              <Stack justify="flex-start" align="flex-start" spacing="0px">
                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="bold"
                  fontSize="14px"
                  color="#141414"
                  alignSelf="stretch"
                >
                  Quick add
                </Text>
              </Stack>
            </Stack>
            <Stack
              paddingTop="16px"
              paddingBottom="13px"
              justify="center"
              align="center"
              spacing="0px"
              borderColor="#E5E8EB"
              borderBottomWidth="3px"
              flex="1"
            >
              <Stack justify="flex-start" align="flex-start" spacing="0px">
                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="bold"
                  fontSize="14px"
                  color="#737373"
                  alignSelf="stretch"
                >
                  Custom entry
                </Text>
                
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          paddingX="16px"
          paddingTop="16px"
          paddingBottom="8px"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          alignSelf="stretch"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.28"
            fontWeight="bold"
            fontSize="18px"
            color="#141414"
            alignSelf="stretch"
          >
            Activity
          </Text>
        </Stack>
        <Stack
          paddingStart="12px"
          paddingEnd="16px"
          paddingY="12px"
          direction="row"
          justify="flex-start"
          align="flex-start"
          spacing="12px"
          alignSelf="stretch"
        >
          <Stack
            paddingStart="8px"
            paddingEnd="16px"
            borderRadius="12px"
            direction="row"
            justify="center"
            align="center"
            height="32px"
            background="#F5F5F5"
          >
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Stack width="20px" flex="1">
                <Stack
                  justify="flex-start"
                  align="flex-start"
                  spacing="0px"
                  width="16px"
                  height="17px"
                />
              </Stack>
            </Stack>
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="medium"
                fontSize="14px"
                color="#141414"
                alignSelf="stretch"
              >
                Run
              </Text>
            </Stack>
          </Stack>
          <Stack
            paddingStart="8px"
            paddingEnd="16px"
            borderRadius="12px"
            direction="row"
            justify="center"
            align="center"
            height="32px"
            background="#F5F5F5"
          >
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Stack width="20px" flex="1">
                <Stack
                  justify="flex-start"
                  align="flex-start"
                  spacing="0px"
                  width="15px"
                  height="18px"
                />
              </Stack>
            </Stack>
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="medium"
                fontSize="14px"
                color="#141414"
                alignSelf="stretch"
              >
                Walk
              </Text>
            </Stack>
          </Stack>
          <Stack
            paddingStart="8px"
            paddingEnd="16px"
            borderRadius="12px"
            direction="row"
            justify="center"
            align="center"
            height="32px"
            background="#F5F5F5"
          >
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Stack width="20px" flex="1">
                <Stack
                  justify="flex-start"
                  align="flex-start"
                  spacing="0px"
                  width="20px"
                  height="12px"
                />
              </Stack>
            </Stack>
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="medium"
                fontSize="14px"
                color="#141414"
                alignSelf="stretch"
              >
                Bike
              </Text>
            </Stack>
          </Stack>
          <Stack
            paddingStart="8px"
            paddingEnd="16px"
            borderRadius="12px"
            direction="row"
            justify="center"
            align="center"
            height="32px"
            background="#F5F5F5"
          >
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Stack width="20px" flex="1">
                <Stack
                  justify="flex-start"
                  align="flex-start"
                  spacing="0px"
                  width="16px"
                  height="16px"
                />
              </Stack>
            </Stack>
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="medium"
                fontSize="14px"
                color="#141414"
                alignSelf="stretch"
              >
                Swim
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          paddingX="16px"
          paddingY="12px"
          direction="row"
          justify="flex-start"
          align="flex-end"
          spacing="16px"
          flex="1"
        >
          <Stack justify="flex-start" align="flex-start" spacing="0px" flex="1">
            <Stack
              paddingBottom="8px"
              justify="flex-start"
              align="flex-start"
              spacing="0px"
              alignSelf="stretch"
            >
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="medium"
                fontSize="16px"
                color="#141414"
                alignSelf="stretch"
              >
                Search for an activity
              </Text>
            </Stack>
            <Stack
              padding="16px"
              borderRadius="12px"
              direction="row"
              justify="flex-start"
              align="center"
              spacing="0px"
              overflow="hidden"
              height="56px"
              alignSelf="stretch"
              background="#F5F5F5"
            >
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="#737373"
              >
                Search
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          paddingX="16px"
          paddingTop="16px"
          paddingBottom="8px"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          alignSelf="stretch"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.28"
            fontWeight="bold"
            fontSize="18px"
            color="#141414"
            alignSelf="stretch"
          >
            Duration
          </Text>
        </Stack>
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          alignSelf="stretch"
        >
            
          <Stack
            padding="16px"
            direction="row"
            justify="space-between"
            align="center"
            spacing="12px"
            flex="1"
            alignSelf="stretch"
          >
            <Stack
              direction="row"
              justify="space-between"
              align="center"
              spacing="0px"
              flex="1"
            >
              <Stack justify="flex-start" align="flex-start" spacing="0px">
                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="medium"
                  fontSize="16px"
                  color="#141414"
                  alignSelf="stretch"
                >
                  30 minutes
                </Text>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justify="flex-start"
              align="center"
              spacing="16px"
              height="16px"
              flex="1"
            >
              <Stack
                borderRadius="2px"
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="0px"
                height="4px"
                flex="1"
                background="#E0E0E0"
              >
                <Stack
                  borderRadius="2px"
                  justify="flex-start"
                  align="flex-start"
                  spacing="0px"
                  width="193px"
                  alignSelf="stretch"
                  background="#38E078"
                />
              </Stack>
              <Stack justify="flex-start" align="flex-start" spacing="0px">
                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="14px"
                  color="#141414"
                  alignSelf="stretch"
                >
                  30 minutes
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          paddingX="16px"
          paddingTop="16px"
          paddingBottom="8px"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          alignSelf="stretch"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.28"
            fontWeight="bold"
            fontSize="18px"
            color="#141414"
            alignSelf="stretch"
          >
            Additional notes
          </Text>
        </Stack>
        <Stack
          paddingX="16px"
          paddingY="12px"
          direction="row"
          justify="flex-start"
          align="flex-end"
          spacing="16px"
          flex="1"
        >
          <Stack justify="flex-start" align="flex-start" spacing="0px" flex="1">
            <Stack
              padding="16px"
              borderRadius="12px"
              direction="row"
              justify="flex-start"
              align="flex-start"
              spacing="0px"
              overflow="hidden"
              flex="1"
              alignSelf="stretch"
              background="#F5F5F5"
            />
          </Stack>
        </Stack>
        <Stack
          paddingX="16px"
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          width="961px"
          height="116px"
          maxWidth="100%"
        >
          <Stack
            paddingY="12px"
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="12px"
            alignSelf="stretch"
          >
            <Stack
              borderRadius="4px"
              justify="flex-start"
              align="flex-start"
              spacing="0px"
              borderColor="#E0E0E0"
              borderStartWidth="2px"
              borderEndWidth="2px"
              borderTopWidth="2px"
              borderBottomWidth="2px"
              width="20px"
              height="20px"
            />
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="#141414"
                alignSelf="stretch"
              >
                Post to the community
              </Text>
            </Stack>
          </Stack>
          <Stack
            paddingY="12px"
            direction="row"
            justify="flex-start"
            align="flex-start"
            spacing="12px"
            alignSelf="stretch"
          >
            <Stack
              borderRadius="4px"
              borderColor="#38E078"
              borderStartWidth="2px"
              borderEndWidth="2px"
              borderTopWidth="2px"
              borderBottomWidth="2px"
              width="20px"
              height="20px"
            />
            <Stack justify="flex-start" align="flex-start" spacing="0px">
              <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="#141414"
                alignSelf="stretch"
              >
                Add to my feed
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)
