The Quad 303 requires 0.5 Vrms unbalanced input for full output.

  

## **Conceptual design**

Each output transistor is protected from passing excessive current by limiting action of TR107, and MR105 for TR1 and MR106 for TR2, which may be regarded as 65 Volt limit batteries.

The maximum voltage which can be developed in either R124 or R125 is 1.3 volts or 4.3 amps in 0.3 Ω.

The sole purpose of MR100, MR101 and R114 is to limit current to about 7mA through TR102.

These components may be ignored at this stage.

The remainder of the TR100, TR101 and TR102 circuitry may be regarded as a single device E3, provided the voltage across C101 remains constant at 9V.

The whole amplifier is enclosed in a DC feedback loop via R113, R111, RV100, and R110, which stabilises the centre point of the output stage (point A) by determining the base voltage of TR100 with respect to the emitter potential set by R104, R102.

If RV100 controls the voltage of point A correctly, it is likely that all the transistors are working.

If E3 is cut off – by shorting TR102 base to earth – point A should rise to HT rail voltage.

If E3 is turned on – by shorting TR101 base to earth – point A should fall almost to earth, say +2 to +3 volts.

These two tests check the normal functioning of the circuit and may help to pinpoint a fault affecting the voltage at A.

An open circuit in TR107 would probably be accompanied by damage to one or more of TR102.

## Electronic schema description and explanation

VCC * R102 / (R102+ R104) ->

67V * 3k9Ω / (3k9Ω + 22kΩ) = 10.09V

C101 stabilizes and reduces any ripple.

MR100 + MR101 = 2 * .7V = 1.4V ->

TR102.E = 1.4 - 0.7 = 0.7V ->

I(R114) = 700mV / 100Ω = 7mA

AC gain set by R101/R108 and R113/R111.

## RV101 controls the quiescent current of the output stage

RV101 controls the quiescent current of the output stage between 5 and 10 mA with no signal input to the amplifier.

In the Quad 303 amplifier, TR107 is part of the output stage and plays a crucial role in setting and maintaining the amplifier's bias current (quiescent current) and controlling the output stage's operating point. Specifically, it works with a potentiometer (RV101) to adjust the voltage between transistors, ensuring the output stage operates in the desired Class AB mode.

Bias Current Adjustment:

The Quad 303 uses a Class AB output stage, which requires a specific bias current to operate efficiently and with low distortion. 

TR107, along with the potentiometer RV101, allows for precise adjustment of the bias current. The potentiometer adjusts the voltage between the bases of TR103 and TR104, which in turn controls the bias current flowing through the output transistors.

By carefully setting the bias current, TR107 and RV101 help ensure the amplifier operates within its optimal performance parameters and remains stable during operation.

TR107 acts as a key component in the feedback loop that regulates the output stage's operating point, contributing to the amplifier's overall performance and sound quality.

## R115 reduces hum and noise and protects sensitive pre-amp components

**Prevents** **Ground Loops –** R115 serves to minimize ground loop issues by introducing a small resistance between the grounds of the pre-amplifier and output stages. This helps reduce hum and noise caused by unwanted currents flowing between the two stages due to differences in ground potential.

**Protects Sensitive Pre-amp Components –** R115’s 2.2Ω value limits the current that can flow between the pre-amplifier and output stage grounds, protecting sensitive components in the pre-amplifier from high currents that might arise under fault conditions or improper connections.

**Stabilizes Ground Reference –** By providing a controlled connection between the two grounds, R115 helps maintain a stable reference voltage, ensuring the pre-amplifier and output stages operate with minimal interference from each other.

If R115 is overheating or failing (as mentioned in some discussions about “smoking” resistors), it’s likely due to excessive current caused by a ground loop, often from connecting a grounded signal source or a fault in the grounding scheme.